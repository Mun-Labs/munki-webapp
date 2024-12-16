import React, { PropsWithChildren } from "react";
import { debugStyles } from "./ui/uiStyles";
import { MunkiHeader } from "./ui/organisms/MunkiHeader/MunkiHeader";
import { MunkiSidebar } from "./ui/organisms/MunkiSidebar/MunkiSidebar";
import { MunkiFooter } from "./ui/organisms/MunkiFooter/MunkiFooter";

const appStyles: React.CSSProperties = {
  ...debugStyles,
  background: "#080A0C",
};

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={appStyles}>
      <MunkiHeader />
      <section className="container">
        <MunkiSidebar />
        {children}
      </section>
      <MunkiFooter />
    </div>
  );
};
