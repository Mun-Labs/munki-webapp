export class RandomService {
  public static generateRandomArray(min: number, max: number, length: number) {
    return Array.from({ length }, () =>
      Math.floor(Math.random() * (max - min + 1) + min),
    );
  }
}
