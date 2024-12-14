import { Flex } from "antd";
import "./MunkiContent.css";
import { debugStyles, Styles } from "../../uiStyles";

const contentStyles: React.CSSProperties = {
  ...debugStyles,
  flexGrow: 1,
  padding: "20px",
  overflowY: "auto",
};

export const MunkiContent = () => {
  return (
    <div className="content" style={contentStyles}>
      <h1 style={{ textAlign: "initial" }}>Top Memecoin Mindshare on X 🧠</h1>

      <Flex justify="space-between">
        <div style={{ ...Styles.borders, flexGrow: 1, marginRight: 30 }}>
          Mindshare map
        </div>
        <div style={{ ...Styles.borders, flexGrow: 3 }}>Meme index</div>
      </Flex>

      <Flex>
        <div style={{ ...debugStyles, flexGrow: 1 }}>Hot list</div>
      </Flex>

      <Flex>
        <div style={{ ...debugStyles, flexGrow: 1, marginRight: 48 }}>
          Whale watch
        </div>
        <div style={{ ...debugStyles, flexGrow: 1 }}>Holders trend</div>
      </Flex>
    </div>
  );
};
