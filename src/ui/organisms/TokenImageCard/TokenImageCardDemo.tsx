import { COIN_MAP } from "../../../api/MockData";
import { TokenImageCard } from "./TokenImageCard";

export const TokenImageCardDemo = () => {
  return (
    <>
      <div style={{ width: 500, height: 500 }}>
        <TokenImageCard token={COIN_MAP.chillGuy}></TokenImageCard>;
      </div>
      <div style={{ width: 100, height: 100 }}>
        <TokenImageCard
          width={100}
          height={100}
          token={COIN_MAP.chillGuy}
        ></TokenImageCard>
        ;
      </div>
    </>
  );
};
