import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { DemoPage } from "./ui/pages/DemoPage.tsx";
import { ConfigProvider } from "antd";
import { darkTheme } from "./ui/uiStyles.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={{ ...darkTheme, cssVar: true }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<App />} />
          <Route path="/demo" index element={<DemoPage />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
);
