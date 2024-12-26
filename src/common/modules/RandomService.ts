export class RandomService {
  public static generateRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  public static generateRandomArray(min: number, max: number, length: number) {
    return Array.from({ length }, () => this.generateRandomNumber(min, max));
  }
}
