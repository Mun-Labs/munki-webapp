import styled from "styled-components";
// import { debugStyles } from "../../uiStyles";
import "./MunkiSidebar.css";

// const siderStyles: React.CSSProperties = {
//   ...debugStyles,
//   position: "sticky",
//   top: 0,
//   width: "200px",
//   height: "100vh",
//   padding: 20,
// };

export const MunkiSidebar = () => {
  return <MunkiSidebarStyled>Sticky Sidebar</MunkiSidebarStyled>;
};

const MunkiSidebarStyled = styled.div.attrs({
  className: "MunkiSidebarStyled",
})`
  position: sticky;
  top: 0;
  width: 200px;
  height: 100vh;
  padding: 20;

  @media (max-width: 767px) {
    display: none;
  }
`;
