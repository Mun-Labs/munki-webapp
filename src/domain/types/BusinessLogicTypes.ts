export enum FearAndGreedClassification {
  "Extreme Fear" = "Extreme Fear",
  "Fear" = "Fear",
  "Greed" = "Greed",
  "Extreme Greed" = "Extreme Greed",
}

export enum VolumeLabels {
  "Low" = "Low",
  "Medium" = "Medium",
  "High" = "High",
}

export type TokenDistributionItemCategories =
  | "bubble"
  | "shrimp"
  | "fish"
  | "dolphin"
  | "shark"
  | "whale";

export type TokenDistributionLabelMapping = Record<
  TokenDistributionItemCategories,
  { icon: string; limit: string }
>;
