import { MOCK_DATA_TOKEN } from "../../../api/MockData";
import { MunkiTokenList } from "./MunkiTokenList";

export const MunkiTokenListDemo = () => {
  const tokens = MOCK_DATA_TOKEN.response;
  return (
    <div style={{ width: 500, height: 100 }}>
      <MunkiTokenList tokens={tokens}></MunkiTokenList>
    </div>
  );
};
