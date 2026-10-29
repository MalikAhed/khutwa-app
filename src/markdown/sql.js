const START = new Set(["SELECT", "INSERT", "UPDATE", "DELETE", "CREATE", "ALTER", "DROP", "WHERE"]);
const CLAUSES = new Set(["FROM", "WHERE", "SET", "VALUES", "HAVING", "LIMIT", "OFFSET", "RETURNING", "UNION", "EXCEPT", "INTERSECT", "ON", "AND", "OR"]);
const JOIN_PREFIXES = new Set(["LEFT", "RIGHT", "FULL", "INNER", "CROSS", "NATURAL", "OUTER"]);
const STRUCTURAL_WORDS = new Set([...START, ...CLAUSES, ...JOIN_PREFIXES, "INTO", "BY", "TABLE", "DATABASE", "INDEX", "VIEW", "DISTINCT", "ALL", "JOIN"]);

// This only finds safe whitespace boundaries; it does not validate or repair SQL.
function tokensOf(source) {
  const tokens = [];
  let depth = 0;
  for (let index = 0; index < source.length;) {
    if (/\s/u.test(source[index])) { index += 1; continue; }
    const start = index;
    const char = source[index];
    if (source.startsWith("--", index) || source.startsWith("/*", index) || source.startsWith("*/", index)) return null;
    if (char === "<" && /^<\/?[A-Za-z][A-Za-z0-9-]*(?:\s[^>]*|\/?)>/.test(source.slice(index))) return null;
    const delimiter = char === "[" ? "]" : ["'", '"', "`", "#"].includes(char) ? char : "";
    if (delimiter) {
      index += 1;
      let closed = false;
      while (index < source.length) {
        if (source[index] === "\\" && delimiter !== "]" && delimiter !== "#") { index += 2; continue; }
        if (source[index] !== delimiter) { index += 1; continue; }
        if (delimiter !== "#" && source[index + 1] === delimiter) { index += 2; continue; }
        index += 1;
        closed = true;
        break;
      }
      if (!closed) return null;
      tokens.push({ text:source.slice(start, index), word:"", start, end:index, depth, quoted:true });
      continue;
    }
    const word = /^[\p{L}_][\p{L}\p{N}_$]*/u.exec(source.slice(index))?.[0];
    if (word) index += word.length;
    else {
      // Reject prose/Markdown punctuation and unknown quoting conventions.
      if (!/[\d(),.;*+\-/=<>!%?|&:]/.test(char)) return null;
      index += 1;
    }
    if (char === ")") depth = Math.max(0, depth - 1);
    tokens.push({ text:source.slice(start, index), word:word?.toUpperCase() || "", start, end:index, depth, quoted:false });
    if (char === "(") depth += 1;
  }
  return tokens;
}

function statementTokens(source) {
  if (typeof source !== "string" || !/^\s*(?:SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|DROP|WHERE)\b/i.test(source)) return null;
  const tokens = tokensOf(source);
  if (!tokens?.length || !START.has(tokens[0].word)) return null;
  // A whole prose paragraph or a batch of statements is not a standalone query.
  if (tokens.some((token, index) => token.text === ";" && index !== tokens.length - 1)) return null;
  if (tokens.some((token, index) => index && /\n\s*\n/.test(source.slice(tokens[index - 1].end, token.start)))) return null;
  const top = tokens.filter(token => token.depth === 0 && token.text !== ";");
  const body = top.some(token => token.quoted || /^\d/.test(token.text) || token.word && !STRUCTURAL_WORDS.has(token.word));
  if (!body) return null;
  const has = word => top.some(token => token.word === word);
  const targetAfter = word => {
    const index = top.findIndex(token => token.word === word);
    return index >= 0 && Boolean(top[index + 1]?.word || top[index + 1]?.quoted);
  };
  let statement = false;
  switch (tokens[0].word) {
    case "SELECT":
      statement = targetAfter("FROM") || top.length > 1 && (
        top[1].quoted || /^\d$/.test(top[1].text) || top.some(token => token.text === "(") ||
        tokens.at(-1).text === ";" && top.length === 2
      );
      break;
    case "INSERT": statement = targetAfter("INTO") && (has("VALUES") || top.some(token => token.text === "(") || top.slice(1).some(token => token.word === "SELECT")); break;
    case "UPDATE": statement = Boolean(top[1]?.word || top[1]?.quoted) && has("SET"); break;
    case "DELETE": statement = targetAfter("FROM"); break;
    case "WHERE": statement = has("DELETE") && targetAfter("FROM"); break;
    default:
      statement = ["TABLE", "DATABASE", "INDEX", "VIEW"].includes(top[1]?.word) && Boolean(top[2]?.word || top[2]?.quoted);
  }
  // Wrong SQL choices still need SQL layout: missing/reordered clauses are
  // part of the question, not a reason to turn the choice into prose.
  if (!statement && tokens[0].word !== "WHERE" && top.length >= 3) {
    statement = ["WHERE", "SET", "FROM", "VALUES"].some(has);
  }
  return statement ? tokens : null;
}

/** Whether a standalone string has enough SQL structure for reading layout. */
export function isSqlStatement(source) {
  return Boolean(statementTokens(source));
}

/** Insert only whitespace; keep even incorrect answer choices exactly as authored. */
export function formatSqlForReading(source) {
  const tokens = statementTokens(source);
  if (!tokens) return source;
  const breaks = new Map();
  const tupleLists = ["INSERT", "CREATE"].includes(tokens[0].word);
  const subqueries = new Set();
  const addBreak = (token, previous, indent = token.depth * 2) => {
    if (previous && !/\n/.test(source.slice(previous.end, token.start))) breaks.set(token.start, `\n${" ".repeat(Math.min(indent, 20))}`);
  };
  tokens.forEach((token, index) => {
    if (!index) return;
    const previous = tokens[index - 1];
    const next = tokens[index + 1];
    if (token.word === "SELECT" && previous.text === "(") {
      subqueries.add(token.depth);
      addBreak(token, previous);
    } else if (token.text === ")" && subqueries.has(token.depth + 1)) {
      subqueries.delete(token.depth + 1);
      addBreak(token, previous);
    } else if (previous.text === "," && (token.depth === 0 || tupleLists && token.depth === 1)) {
      addBreak(token, previous, 2);
    } else if (tupleLists && token.text === "(" && token.depth === 0 && previous.text === ")") {
      addBreak(token, previous);
    } else if (token.word && previous.text !== "." && next?.text !== ".") {
      const grouped = ["GROUP", "ORDER"].includes(token.word) && next?.word === "BY";
      const joinPrefix = JOIN_PREFIXES.has(token.word) && !JOIN_PREFIXES.has(previous.word) && (next?.word === "JOIN" || next?.word === "OUTER");
      const join = token.word === "JOIN" && !JOIN_PREFIXES.has(previous.word);
      if (CLAUSES.has(token.word) || START.has(token.word) || grouped || joinPrefix || join) addBreak(token, previous);
    }
  });
  let result = "";
  let start = 0;
  for (const [offset, whitespace] of breaks) {
    result += source.slice(start, offset) + whitespace;
    start = offset;
  }
  return result + source.slice(start);
}
