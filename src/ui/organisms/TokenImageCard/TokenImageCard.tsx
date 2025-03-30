// TokenImageCard
import { ComponentProps, FC, useMemo } from "react";
import styled from "styled-components";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { IToken } from "../../../domain/entities/Entities";
import {
  measureTextWidth,
  measureTextHeight,
} from "../../../common/modules/htmlElements";
import { getFontSizeFromRatio } from "../../../common/modules/numbers";
import { fontSizeResizeHeightMap } from "../../../common/constants";
import { COLORS } from "../../colors";
import { Token } from "../../atoms/Token/Token";
import { Styles } from "../../uiStyles";

const TokenImageCardStyled = styled.div.attrs({
  className: "TokenImageCardStyled",
})`
  width: 100%;
  height: 100%;
`;

interface TokenImageCardProps extends ComponentProps<any> {
  token: Partial<IToken>;
  width?: number;
  height?: number;
  addOverlay?: boolean;
}

export const TokenImageCard: FC<TokenImageCardProps> = (props) => {
  const { style, width, height, token } = props;
  const { name, twentyFourHourPercentage, logoUrl } = token;

  const fontSizeByWidth = useMemo(() => {
    if (!name) return;
    const measuredWidthOfName = measureTextWidth(name);
    if (!width) return;
    const ratio = measuredWidthOfName / width;
    const byWidth = getFontSizeFromRatio(ratio);
    return byWidth;
  }, [name, width]);

  const fontSizeByHeight = useMemo(() => {
    if (!name) return;
    const measuredHeightOfName = measureTextHeight(name);
    if (!height) return;
    const ratio = measuredHeightOfName / height;
    const byHeight = getFontSizeFromRatio(ratio, fontSizeResizeHeightMap);
    return byHeight;
  }, [name, height]);

  const fontSize = useMemo(() => {
    if (!fontSizeByWidth || !fontSizeByHeight) return;
    const size = Math.min(fontSizeByWidth, fontSizeByHeight);
    return size;
  }, [fontSizeByWidth, fontSizeByHeight]);

  const padding = useMemo(() => {
    if (!fontSize) return 12;
    return fontSize - 4;
  }, [fontSize]);

  const backgroundColor = useMemo(() => {
    if (!twentyFourHourPercentage) return COLORS.black14;
    return twentyFourHourPercentage > 0 ? COLORS.green : COLORS.magenta;
  }, []);

  return (
    <TokenImageCardStyled
      style={{
        ...style,
        width: width ?? style?.width,
        height: height ?? style?.height,
      }}
    >
      {/* Label */}
      <div
        style={{
          position: "absolute",
          zIndex: 1,
          padding: padding,
          fontSize: fontSize,
          textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
          // textShadow: '1px 1px 2px #e4d0d0, 0px 0px 1em #16161f, 0px 0px 0.2em #16161f'
        }}
      >
        <Token
          token={token as any}
          textStyle={{ ...Styles.textShadowRedBlue, fontSize, width }}
        />

        <Percentage
          value={twentyFourHourPercentage}
          plusMinus
          neutralColor
        ></Percentage>
      </div>

      {/* Image */}
      <div
        style={{
          backgroundColor: backgroundColor,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url("${logoUrl}")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            inset: 0,
            opacity: 0.6,
          }}
        ></div>
      </div>
    </TokenImageCardStyled>
  );
};
