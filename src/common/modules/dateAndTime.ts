import { DateTime } from "luxon";

export function unixToDate(unix: number): string {
  return DateTime.fromSeconds(unix).toLocaleString(DateTime.DATE_MED);
}
