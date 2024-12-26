import { IToken } from "../../domain/entities/Entities";
import { RandomService } from "./RandomService";

export class MockService {
  public static generateToken(input: Partial<IToken>): IToken {
    const twentyFourHourPercentage = RandomService.generateRandomNumber(0, 100);
    // @ts-ignore
    return {
      tweets: 100,
      tweetsPercentage: 100,
      influencers: 100,
      influencersPercentage: 100,
      accounts: 100,
      accountsPercentage: 100,
      twentyFourHourVolume: 100,
      whaleCount: 100,
      whaleCountPercentage: 100,
      volume: RandomService.generateRandomNumber(0, 100),
      socials: {
        x: "https://www.x.com",
        web: "https://www.web.com",
        telegram: "https://www.telegram.com",
      },
      twentyFourHourPercentage: RandomService.generateRandomNumber(-100, 100),
      ...input,
    };
  }
}
