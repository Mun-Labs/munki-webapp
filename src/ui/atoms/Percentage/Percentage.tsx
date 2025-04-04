import React, {
  ComponentProps,
  CSSProperties,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Styles } from "../../uiStyles";
import { Tooltip } from "antd";

const PercentageStyled = styled.span.attrs<{
  $fontFamily: PercentageProps["$fontFamily"];
}>({
  className: "PercentageStyled",
})`
  * {
    font-family: ${(props) => props.$fontFamily};
  }
`;

interface PercentageProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {
  value: number | undefined;
  plusMinus?: boolean;
  noSigns?: boolean;
  fractionDigits?: number;
  neutralColor?: boolean;
  colors?: [positive?: string, negative?: string];
  suffix?: ReactNode;
  styles?: {
    value?: CSSProperties;
  };
  $fontFamily?: "munki" | "sans-serif" | string;
}

export const Percentage: FC<PercentageProps> = (props) => {
  const {
    style,
    neutralColor,
    colors,
    plusMinus,
    noSigns,
    fractionDigits,
    value,
    suffix,
    styles,
    $fontFamily: fontFamily,
  } = props;
  if (value == null) return <>n/a</>;

  const ensurePercent = Math.abs(value) < 1 ? value * 100 : value;
  let finalPercent = ensurePercent.toFixed(fractionDigits) + "%";
  if (value === 0) finalPercent = "0%";
  else if (Math.abs(value) < 0.01) finalPercent = "<0.01%";
  else if (value === Infinity) finalPercent = "n/a";

  let color =
    ensurePercent >= 0
      ? colors?.[0] ?? COLORS.green60
      : colors?.[1] ?? COLORS.red;
  if (neutralColor) {
    color = COLORS.white;
  }

  let icon = ensurePercent > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />;
  if (noSigns) {
    icon = <></>;
  } else if (plusMinus) {
    icon = ensurePercent > 0 ? <>+</> : <></>;
  }

  let finalFontFamily = undefined;
  if (fontFamily === "sans-serif")
    finalFontFamily = Styles.fontSansSerif.fontFamily;
  else if (fontFamily) finalFontFamily = fontFamily;

  return (
    <PercentageStyled
      style={{ color, fontFamily: finalFontFamily as any, ...style }}
      $fontFamily={fontFamily}
    >
      <Tooltip title={value + "%"}>
        {icon}
        {<span style={styles?.value}>{finalPercent}</span>}
        <span style={{ marginLeft: 5 }}>{suffix}</span>
      </Tooltip>
    </PercentageStyled>
  );
};
