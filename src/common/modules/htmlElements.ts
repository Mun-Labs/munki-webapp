export function measureTextWidth(
  text: string | undefined,
  font = getComputedStyle(document.body).font,
): number {
  if (!text) return 0;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 0;
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
}

export function measureTextHeight(
  text: string | undefined,
  font = getComputedStyle(document.body).font,
): number {
  if (!text) return 0;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) return 0;
  context.font = font;
  const metrics = context.measureText(text);
  const height = metrics.emHeightAscent + metrics.emHeightDescent;
  return height;
}
