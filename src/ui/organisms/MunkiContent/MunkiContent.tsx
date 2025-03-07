import "./MunkiContent.css";
import { MemecoinMindshare } from "./MemecoinMindshare";
import { AlphaMove } from "./AlphaMove";
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

