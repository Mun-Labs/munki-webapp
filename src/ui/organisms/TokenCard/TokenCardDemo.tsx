import { COIN_MAP } from "../../../api/MockData";
import { TokenCard } from "./TokenCard";
import "./TokenCard.css";

export const TokenCardDemo = () => {
  const token = COIN_MAP.chillGuy;
  return (
    <>
      <TokenCard token={token} />
    </>
  );
};
