import React from "react";
import "./App.css";
import { debugStyles } from "./ui/uiStyles";
import { MunkiHeader } from "./ui/organisms/MunkiHeader/MunkiHeader";
import { MunkiSidebar } from "./ui/organisms/MunkiSidebar/MunkiSidebar";
import { MunkiContent } from "./ui/organisms/MunkiContent/MunkiContent";
import { MunkiFooter } from "./ui/organisms/MunkiFooter/MunkiFooter";

const appStyles: React.CSSProperties = {
  ...debugStyles,
  background: "#080A0C",
};

const App: React.FC = () => {
  return (
    <div style={appStyles}>
      <MunkiHeader />
      <section className="container">
        <MunkiSidebar />
        <MunkiContent />
      </section>
      <MunkiFooter />
    </div>
  );
};

export default App;
