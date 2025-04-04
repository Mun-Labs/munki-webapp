import "./MunkiContent.css";
import { MemecoinMindshare } from "./MemecoinMindshare/MemecoinMindshare";
import { AlphaMove } from "./AlphaMove/AlphaMove";
import { MunkiHero } from "./MunkiHero/MunkiHero";

const contentStyles: React.CSSProperties = {
  padding: "20px",
  // width: "calc(100% - 15rem)",
  width: "100%",
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
