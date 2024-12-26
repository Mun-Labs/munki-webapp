export type AnyObject = Record<PropertyKey, any>;

export interface ITreeChartNode {
  name: string;
  size: number;
  children?: ITreeChartNode[];
}

         
