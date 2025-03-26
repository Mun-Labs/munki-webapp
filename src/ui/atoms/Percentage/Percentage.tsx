import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Styles } from "../../uiStyles";
import { Tooltip } from "antd";

const PercentageStyled = styled.div.attrs<{
  $fontFamily: PercentageProps["$fontFamily"];
}>({
  className: "PercentageStyled",
})`
  display: flex;

  * {
    font-family: ${(props) => props.$fontFamily};
  }
`;

interface PercentageProps extends ComponentProps<any> {
  value: number | undefined;
  plusMinus?: boolean;
  noSigns?: boolean;
  neutralColor?: boolean;
  colors?: [positive?: string, negative?: string];
  suffix?: ReactNode;
  $fontFamily?: "munki" | "sans-serif" | string;
}

export const Percentage: FC<PercentageProps> = (props) => {
  const {
    style,
    neutralColor,
    colors,
    plusMinus,
    noSigns,
    value,
    suffix,
    $fontFamily: fontFamily,
  } = props;
  if (value == null) return <>n/a</>;

  const ensurePercent = value < 1 ? value * 100 : value;
  let finalPercent = ensurePercent.toFixed();
  if (value === 0) finalPercent = "0";
  else if (value < 0.01) finalPercent = "<0.01";

  let color =
    ensurePercent >= 0
      ? colors?.[0] ?? COLORS.japanese_laurel
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
      style={{ color, fontFamily: finalFontFamily, ...style }}
      $fontFamily={fontFamily}
    >
      <Tooltip title={value + "%"}>
        {icon}
        {finalPercent}%{suffix}
      </Tooltip>
    </PercentageStyled>
  );
};
