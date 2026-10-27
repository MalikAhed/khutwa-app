import { canPrefetchAssets, preloadImages } from "../media-ready.js?v=acff67f262f3c107";
import { renderMarkdownDocument } from "../../markdown/renderer.js?v=acff67f262f3c107";

export function preloadNextStep(step) {
  if (!canPrefetchAssets() || step?.type !== "markdown") return;
  const template = document.createElement("template");
  template.innerHTML = renderMarkdownDocument(step.source);
  preloadImages(
    [...template.content.querySelectorAll("img")].map((image) =>
      image.getAttribute("src"),
    ),
  );
}
