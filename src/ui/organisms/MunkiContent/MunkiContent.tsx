import "./MunkiContent.css";
import { HotList } from "./HotList/HotList";
import { MemecoinMindshare } from "./MemecoinMindshare";
import { AlphaMove } from "./AlphaMove";
import { WhaleWatchContent } from "./WhaleWatchContent";
import { MunkiHero } from "./MunkiHero";

const contentStyles: React.CSSProperties = {
  padding: "20px",
  overflowX: "hidden",
};

export const MunkiContent = () => {
  return (
    <div className="content" style={contentStyles}>
      <MunkiHero />
      <MemecoinMindshare />
      <AlphaMove />
{/*       <HotList /> */}
{/*       <WhaleWatchContent /> */}
    </div>
  );
};

