import { DateTime } from "luxon";

export function unixToDate(
  unix: number,
  format: "short" | "med" = "med",
): string {
  let finalFormat = DateTime.DATE_MED;
  if (format === "short") {
    finalFormat = { month: "numeric", day: "numeric", year: "2-digit" };
  }
  return DateTime.fromSeconds(unix).toLocaleString(finalFormat);
}
