import { IToken } from "../../domain/entities/Entities";
import { RandomService } from "./RandomService";

export class MockService {
  public static generateToken(input: {
    name: string;
    logoUrl: string;
  }): IToken {
    const twentyFourHourPercentage = RandomService.generateRandomNumber(0, 100);
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
      volume: 100,
      socials: {
        x: "https://www.x.com",
        web: "https://www.web.com",
        telegram: "https://www.telegram.com",
      },
      twentyFourHourPercentage,
      ...input,
    };
  }
}

export const COIN_MAP: { [key: string]: IToken } = {
  chillGuy: MockService.generateToken({
    name: "CHILLGUY",
    logoUrl: "/chillguy.jpeg",
  }),
  chillgirl: MockService.generateToken({
    name: "CHILLGIRL",
    logoUrl: "/chillgirl.png",
  }),
  pnut: MockService.generateToken({
    name: "PNUT",
    logoUrl: "/pnut.png",
  }),
  degays: MockService.generateToken({
    name: "DEGAYS",
    logoUrl: "/degays.png",
  }),
  aixbt: MockService.generateToken({
    name: "AIXBT",
    logoUrl: "/aixbt.jpeg",
  }),
  adonis: MockService.generateToken({
    name: "ADONIS",
    logoUrl: "/adonis.jpeg",
  }),
  god: MockService.generateToken({
    name: "GOD",
    logoUrl: "/god.png",
  }),
  intern: MockService.generateToken({
    name: "INTERN",
    logoUrl: "/intern.jpeg",
  }),
  ai16z: MockService.generateToken({
    name: "AI16Z",
    logoUrl: "/ai16z.jpeg",
  }),
  fartcoin: MockService.generateToken({
    name: "FARTCOIN",
    logoUrl: "/fartcoin.png",
  }),
  goat: MockService.generateToken({
    name: "GOAT",
    logoUrl: "/goat.png",
  }),
  luigi: MockService.generateToken({
    name: "LUIGI",
    logoUrl: "/luigi.png",
  }),
  pusheen: MockService.generateToken({
    name: "PUSHEEN",
    logoUrl: "/pusheen.png",
  }),
};

export const COINS: IToken[] = Object.values(COIN_MAP);
