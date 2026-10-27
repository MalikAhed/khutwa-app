// Desktop screens hand focus to the first visible, editable text field.
export function getDesktopTextField(scope, view = scope?.ownerDocument?.defaultView) {
  if (!view?.matchMedia?.("(min-width:761px)")?.matches) return null;
  return [...(scope?.querySelectorAll("input, textarea") || [])].find(field =>
    ["text", "email", "password", "tel", "number", "search", "url", "textarea"].includes(field.type)
      && !field.disabled && !field.readOnly
      && !field.closest("[hidden], [inert]") && field.getClientRects().length > 0,
  ) || null;
}
