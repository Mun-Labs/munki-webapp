import { MockWhaleWatch } from "../../../api/MockData";
import { WhaleWatch } from "./WhaleWatch";

export const WhaleWatchDemo = () => {
  const whaleWatch = MockWhaleWatch.slice(0, 3);
  return (
    <div style={{ width: 300, height: 300 }}>
      <WhaleWatch whales={whaleWatch}></WhaleWatch>
    </div>
  );
};
