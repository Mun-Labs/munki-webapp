// TokenSearchWithDropdown
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { useTokenApi } from "../../../api/hooks/useTokenApi";
import { MOCK_DATA_TOKEN } from "../../../api/MockData";
import MunkiTokenList from "../MunkiTokenList/MunkiTokenList";

interface ITokenSearchWithDropdownProps extends ComponentProps<any> {}

export const TokenSearchWithDropdown: FC<
  ITokenSearchWithDropdownProps
> = () => {
  const tokenResponse = useTokenApi(undefined, MOCK_DATA_TOKEN);
  const mockTokens = tokenResponse.data?.slice(0, 1);
  /*prettier-ignore*/ console.log('>>>> _ >>>> ~ DemoPage.tsx:74 ~ DemoPage ~ mockTokens:', mockTokens)

  return (
    <TokenSearchWithDropdownStyled>
      <TokenInputStyled
        size="large"
        placeholder="Search ticker, name, ca..."
        prefix={<SearchOutlined />}
      />
      <MunkiTokenList tokens={mockTokens!}></MunkiTokenList>
    </TokenSearchWithDropdownStyled>
  );
};

const TokenSearchWithDropdownStyled = styled.div.attrs({
  className: "TokenSearchWithDropdownStyled",
})`
  width: 60%;
  margin: 10px auto;
  margin-bottom: 50px;
`;

const TokenInputStyled = styled(Input).attrs({
  className: "TokenInputStyled",
})`
  &.ant-input-css-var {
    --ant-input-active-border-color: #ee1b84;
    --ant-input-hover-border-color: #ee1b84;
  }

  flex: 1;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  margin: 10px auto;
  margin-bottom: 6px;
  color: ${COLORS.white35};
  background-color: #242424;
  box-shadow: 0 0 21.4px 0 #ffee64;

  background: linear-gradient(${COLORS.raisin_black} 0 0) padding-box,
    /*this is your grey background*/ linear-gradient(to right, #fbe892, #ee1b84)
      border-box;
  border: 1px solid transparent;
  border-radius: 8px;

  &.ant-input-outlined:hover {
    // border-color: unset;
  }

  input.ant-input::placeholder {
    color: ${COLORS.white60} !important; // TODO: please remove global css rules, eg MunkiContent.css
  }
`;
