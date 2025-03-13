import { ComponentProps, FC } from "react";
import styled from "styled-components";
import App from "./App";
import { DemoPage } from "./ui/pages/DemoPage.tsx";
import { Route, Routes } from "react-router";
import { AppLayout } from "./AppLayout.tsx";
import { TokenDetailsPage } from "./ui/pages/TokenDetailsPage/index.tsx";

interface AppControllerProps extends ComponentProps<any> {}

const AppControllerStyled = styled.div.attrs({
  className: "AppControllerStyled",
})``;

export const AppController: FC<AppControllerProps> = (props) => {
  const {} = props;
  /*   let navigate = useNavigate(); */

  //const {
  //  token: { colorBgContainer, borderRadiusLG },
  //} = theme.useToken();

  /*  useEffect(() => {
     window.addEventListener("keydown", (event) => {
       const key = event.key;
       switch (key) {
         case "d":
           navigate("/demo");
           break;
         case "l":
           navigate("/");
           break;
         case "t":
           navigate("/details");
           break;
         default:
           break;
       }
     });
   }, []); */

  return (
    <AppControllerStyled>
      <Routes>
        <Route path="/" index element={<App />} />
        <Route path="/demo" index element={<DemoPage />} />
        <Route
          path="token/:tokenName"
          index
          element={
            <AppLayout>
              <TokenDetailsPage />
            </AppLayout>
          }
        />
        <Route
          path="details"
          index
          element={
            <AppLayout>
              <TokenDetailsPage />
            </AppLayout>
          }
        />
      </Routes>
    </AppControllerStyled>
  );
};
