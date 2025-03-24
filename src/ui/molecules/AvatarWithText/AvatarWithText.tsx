import { Avatar, Flex } from "antd";
import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";
import { AvatarDemo } from "../../demos/IconDemo";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";

const AvatarWithTextStyled = styled.div.attrs({
  className: "AvatarWithTextStyled",
})`
  .name {
    font-size: 21px;
    font-weight: bold;
    color: white;
  }
  .symbol {
    white-space: nowrap;
    font-family: monospace;
    font-size: 16px;
    color: ${COLORS.chlorophyll_green};
  }
`;

interface AvatarWithTextProps extends ComponentProps<any> {
  logoUrl?: string;
  name: ReactNode;
  symbol: ReactNode;
  shape?: "circle" | "square";
}

export const AvatarWithText: FC<AvatarWithTextProps> = (props) => {
  const { style, logoUrl, name, symbol, shape } = props;
  /*prettier-ignore*/ console.log("[AvatarWithText.tsx,21] shape: ", shape);
  return (
    <AvatarWithTextStyled style={{ ...style }}>
      <Flex align="center">
        {logoUrl ? (
          <Avatar
            size={"large"}
            src={logoUrl}
            shape={shape}
            style={{ border: `1px solid ${COLORS.blue75}` }}
          />
        ) : (
          <AvatarDemo size={40} />
        )}
        <div style={{ marginLeft: 12 }}>
          <div className="name" style={{ color: COLORS.magenta, ...Styles.h3 }}>
            {name}
          </div>
          <div
            className="symbol"
            style={{
              // @ts-ignore - Type 'CSSProperties' is not assignable to type 'FontFamily | undefined'. [2322]
              fontFamily: Styles.fontSansSerif.fontFamily,
              color: COLORS.yellow,
            }}
          >
            {symbol}
          </div>
        </div>
      </Flex>
    </AvatarWithTextStyled>
  );
};
