import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppController } from "./AppController.tsx";
import { BrowserRouter } from "react-router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./ui/uiStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={{ ...darkTheme, cssVar: true }}>
      <BrowserRouter>
        <AppController />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
