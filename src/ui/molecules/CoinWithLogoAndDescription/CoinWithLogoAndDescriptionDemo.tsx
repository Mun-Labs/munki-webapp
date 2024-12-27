import { COIN_MAP } from "../../../api/MockData";
import { CoinWithLogoAndDescription } from "./CoinWithLogoAndDescription";

export const CoinWithLogoAndDescriptionDemo = () => {
  const token = COIN_MAP.chillGuy;
  return (
    <div style={{ width: 300, height: 100 }}>
      <CoinWithLogoAndDescription token={token}></CoinWithLogoAndDescription>
    </div>
  );
};
