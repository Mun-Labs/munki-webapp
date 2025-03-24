import { ComponentProps, FC, ReactNode } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { Styles } from "../../uiStyles";

const PercentageStyled = styled.div.attrs({ className: "PercentageStyled" })`
  display: flex;
`;

interface PercentageProps extends ComponentProps<any> {
  value: number | undefined;
  plusMinus?: boolean;
  noSigns?: boolean;
  neutralColor?: boolean;
  suffix?: ReactNode;
  fontFamily?: "munki" | "sans-serif" | string;
}

export const Percentage: FC<PercentageProps> = (props) => {
  const { style, neutralColor, plusMinus, noSigns, value, suffix, fontFamily } =
    props;
  if (!value) return <>n/a</>;

  const ensurePercent = value < 1 ? value * 100 : value;

  let color = ensurePercent > 0 ? COLORS.japanese_laurel : COLORS.red;
  if (neutralColor) {
    color = COLORS.white;
  }

  let icon = ensurePercent > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />;
  if (noSigns) {
    icon = <></>;
  } else if (plusMinus) {
    icon = ensurePercent > 0 ? <>+</> : <></>;
  }

  let finalFontFamily = undefined
  if (fontFamily === 'sans-serif') finalFontFamily = Styles.fontSansSerif.fontFamily
  else if (fontFamily) finalFontFamily = fontFamily

  return (
    <PercentageStyled
      style={{ color, fontFamily: finalFontFamily, ...style }}
    >
      {icon}
      {ensurePercent.toFixed()}%{suffix}
    </PercentageStyled>
  );
};
