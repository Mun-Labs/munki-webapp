import React from "react";
import "./App.css";
import { MunkiContent } from "./ui/organisms/MunkiContent/MunkiContent";
import { AppLayout } from "./AppLayout";

const App: React.FC = () => {
  return (
    <AppLayout>
      <MunkiContent />
    </AppLayout>
  );
};

export default App;
