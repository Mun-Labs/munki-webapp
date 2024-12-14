import { debugStyles } from "../../uiStyles";
import "./MunkiSidebar.css";

const siderStyles: React.CSSProperties = {
  ...debugStyles,
  position: "sticky",
  top: 0,
  width: "200px",
  height: "100vh",
  padding: 20,
};

export const MunkiSidebar = () => {
  return (
    <div className="sider" style={siderStyles}>
      Sticky Sidebar
    </div>
  );
};
