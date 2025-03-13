export class RandomService {
  public static generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  public static generateRandomArray(min: number, max: number, length: number) {
    return Array.from({ length }, () => this.generateRandomNumber(min, max));
  }

  public pickRandom<T>(array: T[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

  public static number(
    size: "B" | "M" | "K" | "decimal" | undefined = undefined,
    settings: { negative?: boolean } = { negative: false },
  ) {
    if (size === "decimal") {
      return this.percent();
    }

    let start = 0;
    let end = 999;
    switch (size) {
      case "B":
        start = 1_000_000_000;
        end = 999_999_999_999;
        break;
      case "M":
        start = 1_000_000;
        end = 999_999_999;
        break;
      case "K":
        start = 1_000;
        end = 999_999;
        break;
    }

    let rnd = this.generateRandomNumber(start, end);
    if (settings.negative) {
      rnd = -rnd;
    }
    return rnd;
  }

  public static percent(
    settings: { negative?: boolean } = { negative: false },
  ) {
    let start = settings.negative ? -100 : 0;
    const rnd = this.generateRandomNumber(start, 100);
    const value = rnd / 100;
    return value;
  }
}

//const r = RandomService.number();
///*prettier-ignore*/ console.log("[RandomService.ts,53] r: ", r);
