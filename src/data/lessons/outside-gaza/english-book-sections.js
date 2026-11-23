// The books call their numbered lesson sections “Periods.” The classified
// reading and language exercises can span both periods within a skill.
export const englishSections = [
  ["A new start", 4, "34–37", "11–12", "13"],
  ["Under pressure", 14, "34–37", "21–22", "22–23"],
  ["A funny thing happened", 24, "34–37", "31–32", "32–33"],
  ["The shrinking world", 38, "38–47", "45–46", "47"],
  ["The world of work", 48, "78–81", "55", "56–57"],
  ["In business", 58, "78–81", "65", "66–67"],
  ["Only a game?", 68, "78–81", "75", "76–77"],
  ["Different places, different ways", 82, "82–91", "89–90", "90–91"],
].map(([title, start, review, skills, writing]) => [title, review, [
  ["Reading and comprehension", `${start + 1}–${start + 3}`, /-reading-|-brand-loyalty-|-p\d+-q(?:r\d|r-|reading|text)/, 0, "1–2"],
  ["Language and vocabulary study", `${start + 4}–${start + 6}`, /-vocabulary-|-language-|-p\d+-q(?:v\d|v-|l\d|l-|language|correct|tag)/, 0, "3–4"],
  ["Integrated skills", skills, /-communication-|-p\d+-q(?:communication|listening)/, 0, "5"],
  ["Writing", writing, /-writing-|-p\d+-qwriting/, 0, "6"],
]]);

export const readingPlusSections = [
  ["Making changes", "22–25", [
    ["Reading and comprehension", "5–11", 6, 14, "1–4"],
    ["Writing skills", "12–13", 15, 15, "5"],
    ["Literature · Romeo and Juliet, Part A", "14–21", 0, 0, "A"],
  ]],
  ["Money talks", "26–37", [
    ["Reading and comprehension", "27–33", 18, 25, "1–4"],
    ["Writing", "34", 26, 26, "5"],
    ["Literature", "35–37", 0, 0, "6"],
  ]],
  ["Past history?", "54–57", [
    ["Reading and comprehension", "39–45", 28, 31, "1–4"],
    ["Writing", "46–47", 32, 32, "5"],
    ["Literature · Romeo and Juliet, Part B", "48–53", 0, 0, "B"],
  ]],
];
