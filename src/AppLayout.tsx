import React, { PropsWithChildren } from "react";
import { MunkiHeader } from "./ui/organisms/MunkiHeader/MunkiHeader";
import { MunkiFooter } from "./ui/organisms/MunkiFooter/MunkiFooter";

const appStyles: React.CSSProperties = {
  // ...debugStyles,
  background: "#010101",
};

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={appStyles}>
      <MunkiHeader />
      <section className="container">
        {/*         <MunkiSidebar /> */}
        {children}
      </section>
      <MunkiFooter />
    </div>
  );
};
