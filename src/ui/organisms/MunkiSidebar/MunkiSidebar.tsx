import styled from "styled-components";
import "./MunkiSidebar.css";
import { COLORS } from "../../colors";
import { Collapse } from "antd";
import { useState } from "react";

export const MunkiSidebar = () => {
  const [isCollapse, setIsCollapse] = useState(false);

  return (
    <MunkiSidebarStyled $isCollapse={isCollapse}>
      <p onClick={() => setIsCollapse(!isCollapse)}>Hahaha</p>
    </MunkiSidebarStyled>
  );
};

interface IMunkiSidebarStyled {
  $isCollapse: boolean;
}

const MunkiSidebarStyled = styled.div.attrs<IMunkiSidebarStyled>({
  className: "MunkiSidebarStyled",
})`
  //
  display:none;
  position: sticky;
  top: 0;
  left: 0;
  background: #000;
  color: ${COLORS.yellow};
  z-index: 100;
  width: ${(props) => (props.$isCollapse ? "1rem" : "15rem")};
  height: 100vh;
  padding: 20px;
  border-right: 1px solid ${COLORS.yellow};
  transition: 0.4s all;

  .ant-collapse-header-text {
    color: ${COLORS.yellow};
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
