import { fontSizeResizeWidthMap } from "../constants";

export class NumbersService {
  /**
   * if 810505 => 810.5K
   * if 8105050 => 8.1M
   * if 1056 => 1.1K
   * if 50868687878 => 50.9B
   */
  public static numberToNumberString(
    value: number | undefined,
    settings: { fixed?: number } = { fixed: 2 },
  ): string {
    if (value == null) return "n/a";

    const { fixed } = settings;
    const absValue = Math.abs(value);
    let result = "";
    if (absValue >= 1000000000) {
      result = `${(value / 1000000000).toFixed(fixed)}B`;
    } else if (absValue >= 1000000) {
      result = `${(value / 1000000).toFixed(fixed)}M`;
    } else if (absValue >= 1000) {
      result = `${(value / 1000).toFixed(fixed)}K`;
    } else {
      result = value.toFixed(fixed);
    }

    return result;
  }

  /**
   * Formats a number with commas as thousand separators
   * Example: 123456.78 => "123,456.78"
   */
  public static formatNumberWithCommas(
    value: number | undefined,
    settings: { fixed?: number } = {},
  ): string {
    if (value == null) return "n/a";

    const { fixed } = settings;
    let stringValue =
      fixed !== undefined ? value.toFixed(fixed) : value.toString();

    // Split number into integer and decimal parts
    const parts = stringValue.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    // Join parts back together
    return parts.join(".");
  }
}

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
