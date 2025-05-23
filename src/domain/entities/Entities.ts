import { Address, SocialKeys } from "../types/Types";

export interface ITicker {}

export type ISocials = Record<SocialKeys, string>;

export interface IToken {
  name: string;
  address: string;
  tweets?: number;
  tweetsPercentage?: number;
  influencers?: number;
  influencersPercentage?: number;
  accounts?: number;
  accountsPercentage?: number;
  twentyFourHourVolume?: number;
  twentyFourHourPercentage?: number;
  whaleCount?: number;
  whaleCountPercentage?: number;
  volume?: number;
  socials?: ISocials;
  logoUrl?: string;

  // market
  mindshare: number;
  mindshare7D: number;
  marketCap: number;
  marketCap7D: number;
  topTweets: any[];
  avgImpressions: number;
  avgImpressions7D: number;
  avgEngagement: number;
  avgEngagement7D: number;
  price: number;
  price7D: number;
}

export interface ISmartWallet {
  rank?: number;
  symbols: string;
  inflowBar: number;
  inflow: number;
  inflowPercentage: number;
}

export interface IHolders {
  tokenName: string;
  amountHolders: number;
  amountHoldersPercentage: number;
  twentyFourHour: number;
  twentyFourHourPercentage: number;
  twentyFourHourInPercent: number;
  twentyFourHourInPercentPercentage: number;
}

export interface IWhale {
  name: string;
  address?: string;
  purchased?: number;
  token: IToken;
  logoUrl?: string;
  timeAgo?: string;
}

export interface ITopHolding {
  image: string;
  address: Address;
  name: string;
  volume: number;
  percent: number;
}

export interface ITopHolder {
  rank: number;
  wallet: string;
  netWorth: number;
  holdingValue: number;
  holdingPercent: number;
  winRate: number;
  holdingTime: number;
  topHoldings: ITopHolding[];
  scan: string;
}
