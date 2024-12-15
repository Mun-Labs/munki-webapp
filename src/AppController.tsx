import { ComponentProps, FC, useEffect } from "react";
import styled from "styled-components";
import App from "./App";
import { DemoPage } from "./ui/pages/DemoPage.tsx";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import { ConfigProvider } from "antd";
import { darkTheme } from "./ui/uiStyles.ts";

interface AppControllerProps extends ComponentProps<any> {}

const AppControllerStyled = styled.div.attrs({
  className: "AppControllerStyled",
})``;

export const AppController: FC<AppControllerProps> = (props) => {
  const {} = props;
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
        case "o":
          navigate("/one");
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
    <AppControllerStyled>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/demo" index element={<DemoPage />} />
      </Routes>
    </AppControllerStyled>
  );
};
