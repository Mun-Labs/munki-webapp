import React, { PropsWithChildren } from "react";
import { MunkiHeader } from "./ui/organisms/MunkiHeader/MunkiHeader";
import { MunkiFooter } from "./ui/organisms/MunkiFooter/MunkiFooter";
import styled from "styled-components";
import { MunkiSidebar } from "./ui/organisms/MunkiSidebar/MunkiSidebar";

const appStyles: React.CSSProperties = {
  // ...debugStyles,
  background: "#010101",
};

const StyledMainContent = styled.section`
  margin: 0 auto;
`;

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={appStyles}>
      <MunkiHeader />

      <StyledMainContent className="container">
        <MunkiSidebar />
        {children}
      </StyledMainContent>
      <MunkiFooter />
    </div>
  );
};
