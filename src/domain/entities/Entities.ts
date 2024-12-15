export interface ISocials {
  x?: string;
  web?: string;
  telegram?: string;
}

export interface IToken {
  name: string;
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
