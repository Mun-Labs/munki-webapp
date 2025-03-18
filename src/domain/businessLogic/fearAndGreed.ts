import { FearAndGreed } from "../../api/apiTypes";
import { FearAndGreedClassification } from "../types/BusinessLogicTypes";

export const fearAndGreedColorMapping: Record<
  FearAndGreed["valueClassification"],
  string
> = {
  [FearAndGreedClassification["Extreme Fear"]]: "#ee1b84",
  [FearAndGreedClassification.Fear]: "#f35d7a",
  [FearAndGreedClassification.Greed]: "#ffee64",
  [FearAndGreedClassification["Extreme Greed"]]: "#54f209",
  "n/a": "grey",
};

export const fearAndGreedTimeMapping: Record<number, string> = {
  0: "Now",
  1: "Yesterday",
  2: "Last week",
  3: "Last month",
};
