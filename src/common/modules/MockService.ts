import { IToken } from "../../domain/entities/Entities";
import { generateAddressWithSeed, generateId } from "./generateId";
import { RandomService } from "./RandomService";

export class MockService {
  public static generateToken(input: Partial<IToken>): IToken {
    const id = generateId();
    const name = input.name || "Token " + id;
    const ensureDollar = name.startsWith("$") ? name : "$" + name;

    return {
      address: generateAddressWithSeed(name),
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
        website: "https://www.web.com",
        telegram: "https://www.telegram.com",
      },
      twentyFourHourPercentage: RandomService.generateRandomNumber(-100, 100),
      // market
      mindshare: RandomService.percent(),
      mindshare7D: RandomService.percent({ negative: true }),
      marketCap: RandomService.number("M"),
      marketCap7D: RandomService.percent({ negative: true }),
      topTweets: [],
      avgImpressions: RandomService.number("K"),
      avgImpressions7D: RandomService.percent({ negative: true }),
      avgEngagement: RandomService.number(),
      avgEngagement7D: RandomService.percent({ negative: true }),
      price: RandomService.number("decimal"),
      price7D: RandomService.percent({ negative: true }),
      ...input,
      name: ensureDollar,
    };
  }
}
