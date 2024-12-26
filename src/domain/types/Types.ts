export type AnyObject = Record<PropertyKey, any>;

export interface ITreeChartNode {
  name: string;
  size: number;
  logoUrl?: string;
  twentyFourHourPercentage?: number;
  children?: ITreeChartNode[];
}
