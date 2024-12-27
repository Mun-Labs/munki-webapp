import { COIN_MAP } from "../../../api/MockData";
import { Token } from "./Token";

export const TokenDemo = () => {
  const token = COIN_MAP.chillGuy;

  return (
    <div style={{ width: 300, height: 100 }}>
      <Token token={token}></Token>
    </div>
  );
};
