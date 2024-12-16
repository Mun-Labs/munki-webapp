export class TimeService {
  public static minutesToTimeString(minutes: number): string {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours === 0) {
      return `${remainingMinutes}M`;
    }
    if (remainingMinutes === 0) {
      return `${hours}H`;
    }
    return `${hours}H ${remainingMinutes}M`;
  }
}

//const result = [
//  TimeService.minutesToTimeString(1), // 24h 0m
//  TimeService.minutesToTimeString(5), // 24h 0m
//  TimeService.minutesToTimeString(60), // 24h 0m
//  TimeService.minutesToTimeString(360), // 24h 0m
//  TimeService.minutesToTimeString(720), // 24h 0m
//  TimeService.minutesToTimeString(1440),
//];
