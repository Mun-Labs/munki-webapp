import React, { useEffect } from "react";
import "./App.css";
import { debugStyles } from "./ui/uiStyles";
import { MunkiHeader } from "./ui/organisms/MunkiHeader/MunkiHeader";
import { MunkiSidebar } from "./ui/organisms/MunkiSidebar/MunkiSidebar";
import { MunkiContent } from "./ui/organisms/MunkiContent/MunkiContent";
import { MunkiFooter } from "./ui/organisms/MunkiFooter/MunkiFooter";
import { useNavigate } from "react-router";
// import { theme } from "antd";

const appStyles: React.CSSProperties = {
  ...debugStyles,
  background: "#080A0C",
};

const App: React.FC = () => {
  let navigate = useNavigate();

  //const {
  //  token: { colorBgContainer, borderRadiusLG },
  //} = theme.useToken();
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      const key = event.key;
      switch (key) {
        case "d":
          navigate("/demo");
          break;
        case "l":
          navigate("/");
          break;
        default:
          break;
      }
    });
  }, []);

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
