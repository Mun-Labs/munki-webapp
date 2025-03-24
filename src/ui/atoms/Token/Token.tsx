// Token
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import type { TokenTrending } from "../../../api/apiTypes";
import { Button } from "antd";
import { UI_COLORS } from "../../colors";

const TokenStyled = styled.div.attrs({
  className: "TokenStyled",
})`
  height: 22px;
  display: flex;
  align-items: center;

  a {
    display: flex;
  }

  button {
    color: ${UI_COLORS.primaryText} !important; // !important due to specificy issue with "where()" https://github.com/ant-design/ant-design/issues/52879
    padding: 0;
  }

  button:hover {
    text-decoration: underline;
  }
`;

interface ITokenProps extends ComponentProps<any> {
  token: { tokenAddress: string; name: string };
  textStyle?: React.CSSProperties;
}

export const Token: FC<ITokenProps> = (props) => {
  const { style, textStyle, token } = props;
  return (
    <TokenStyled style={{ ...style }}>
      <a href={`/token/${token.tokenAddress}`} rel="noreferrer noopener">
        <Button type="link">
          <div style={{ textAlign: "start", ...textStyle }}>{token.name}</div>
        </Button>
      </a>
    </TokenStyled>
  );
};
