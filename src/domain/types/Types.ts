export type AnyObject = Record<PropertyKey, any>;

export interface ITreeChartNode {
  name: string;
  size: number;
  logoUrl?: string;
  twentyFourHourPercentage?: number;
  children?: ITreeChartNode[];
}

export const socials = ["web", "website", "telegram", "x"] as const;
export type SocialKeys = (typeof socials)[number];

export type IIconMap = Record<
  SocialKeys,
  {
    src: string;
    width?: number;
    height?: number;
  }
>;

export type UnixTime = number;
export type Address = string;
