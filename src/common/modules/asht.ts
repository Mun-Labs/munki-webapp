export function getCssVar(
  varName: string,
  isPixel = true,
  documentElement = document.documentElement,
): number {
  const cssVar = getComputedStyle(documentElement).getPropertyValue(varName);
  /*prettier-ignore*/ console.log("[asht.ts,7] cssVar: ", cssVar);

  if (isPixel) {
    return getValueFromPixelString(cssVar);
  }
  return Number(cssVar);
}

/**
 * '480px' --> 480
 */
export function getValueFromPixelString(pixelString: string): number {
  return Number(pixelString.replace(/px$/, ""));
}
