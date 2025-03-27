import { TokenDistributionLabelMapping } from "../types/BusinessLogicTypes";

export const tokenDistributionLabelMapping: TokenDistributionLabelMapping = {
  bubble: { icon: "🫧", limit: "$0 - $10" },
  shrimp: { icon: "🦐", limit: "$10 - $100" },
  fish: { icon: "🐟", limit: "$100 - $1k" },
  dolphin: { icon: "🐬", limit: "$1k - $10k" },
  shark: { icon: "🦈", limit: "$10k - $100k" },
  whale: { icon: "🐋", limit: "> $100k" },
};
