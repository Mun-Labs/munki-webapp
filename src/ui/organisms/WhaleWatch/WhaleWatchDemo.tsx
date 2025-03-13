import { MockWhaleWatch } from "../../../api/MockData";
import { WhaleWatchColumn } from "./WhaleWatch";

export const WhaleWatchDemo = () => {
  const whaleWatch = MockWhaleWatch.slice(0, 3);
  return (
    <div style={{ width: 300, height: 300 }}>
      <WhaleWatchColumn whales={whaleWatch}></WhaleWatchColumn>
    </div>
  );
};
