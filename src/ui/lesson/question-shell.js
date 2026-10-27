// Keep the footer frame and question strip while replacing a question's content.
export function replaceQuestionShell(container, markup) {
  const footer = container.querySelector('.level-layout-actions');
  if (!footer) { container.innerHTML = markup;return; }
  const slider = footer.querySelector('[data-question-slider]');
  const template = document.createElement('template');
  template.innerHTML = markup;
  const nextFooter = template.content.querySelector('.level-layout-actions');
  if (!nextFooter) { container.replaceChildren(template.content);return; }
  for (const attribute of [...footer.attributes]) footer.removeAttribute(attribute.name);
  for (const attribute of nextFooter.attributes) footer.setAttribute(attribute.name,attribute.value);
  footer.replaceChildren(...nextFooter.childNodes);
  if (slider) footer.prepend(slider);
  nextFooter.replaceWith(footer);
  container.replaceChildren(template.content);
}
