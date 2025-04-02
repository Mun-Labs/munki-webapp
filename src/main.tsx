import { PrivyProvider } from "@privy-io/react-auth";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppController } from "./AppController.tsx";
import { BrowserRouter } from "react-router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./ui/uiStyles.ts";
import { COL_DS } from "./ui/colors.ts";

const privyAppId = import.meta.env.VITE_REACT_APP_PRIVY_APP_ID;
const clientId = import.meta.env.VITE_REACT_APP_PRIVY_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrivyProvider
      appId={privyAppId}
      clientId={clientId}
      config={{
        appearance: {
          accentColor: COL_DS.primary400 as any,
          theme: COL_DS.card900 as any,
          showWalletLoginFirst: false,
          logo: "https://auth.privy.io/logos/privy-logo-dark.png",
        },
        loginMethods: ["email", "google"],
      }}
    >
      <ConfigProvider theme={{ ...darkTheme, cssVar: true }}>
        <BrowserRouter>
          <AppController />
        </BrowserRouter>
      </ConfigProvider>
    </PrivyProvider>
  </StrictMode>,
);
