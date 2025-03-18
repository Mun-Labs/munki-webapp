import styled from "styled-components";
import "./MunkiSidebar.css";
import { COLORS } from "../../colors";

export const MunkiSidebar = () => {
  return (
    <MunkiSidebarStyled>
      {/*     <Collapse expandIconPosition='end' style={{ whiteSpace: 'nowrap' }} items={items} bordered={false} /> */}
    </MunkiSidebarStyled>
  );
};

const MunkiSidebarStyled = styled.div.attrs({
  className: "MunkiSidebarStyled",
})`
  color: ${COLORS.yellow};
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid ${COLORS.yellow};

  .ant-collapse-header-text {
    color: ${COLORS.yellow};
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
