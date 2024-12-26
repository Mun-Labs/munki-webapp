import { fontSizeResizeWidthMap } from "../constants";

export function getFontSizeFromRatio(
  givenRatio: number,
  ratioMap = fontSizeResizeWidthMap,
) {
  let targetSize = 16;
  let previousRatio = 0;
  Object.entries(ratioMap).find(([fontSize, ratio], index) => {
    // Corner case: Check very first
    if (index === 0) {
      if (givenRatio > ratio) {
        targetSize = Number(fontSize);
        return true;
      }
      previousRatio = ratio;
      return false;
    } else if (index === Object.entries(ratioMap).length - 1) {
      // Corner case: Check very last
      targetSize = Number(fontSize);
      return true;
    }

    const isBetween = givenRatio < previousRatio && givenRatio >= ratio;
    if (isBetween) {
      targetSize = Number(fontSize);
      return true;
    }
    previousRatio = ratio;
  });
  return targetSize;
}

// const result = getFontSizeFromRatio(0.75);
// /*prettier-ignore*/ console.log("[TokenImageCard.tsx,48] result: ", result);
