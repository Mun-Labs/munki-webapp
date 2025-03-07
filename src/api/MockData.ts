import { MockService } from "../common/modules/MockService";
import { RandomService } from "../common/modules/RandomService";
import { IToken, IWhale } from "../domain/entities/Entities";

export const COIN_MAP = {
  chillGuy: MockService.generateToken({
    name: "CHILLGUY",
    logoUrl: "/chillguy.jpeg",
    volume: RandomService.generateRandomNumber(1000, 1000),
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

const a = COIN_MAP.chillGuy;
/*prettier-ignore*/ console.log("[MockData.ts,62] a: ", a);

export const MockTokens: IToken[] = Object.values(COIN_MAP);

export const MockWhaleWatchBase: IWhale[] = [
  {
    name: "ACT Whale",
    purchased: 8,
    token: COIN_MAP.fartcoin,
    logoUrl: "/user-whale1.png",
  },
  {
    name: "ACT Whale",
    purchased: -8,
    token: COIN_MAP.luigi,
    logoUrl: "/user-whale1.png",
  },
  {
    name: "ACT FWOG",
    purchased: -8,
    token: COIN_MAP.pusheen,
    logoUrl: "/user-whale2.png",
  },
];

export const MockWhaleWatch: IWhale[] = [
  ...MockWhaleWatchBase,
  ...MockWhaleWatchBase,
  ...MockWhaleWatchBase,
];
