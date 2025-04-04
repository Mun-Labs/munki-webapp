import { ComponentProps, FC, HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { NumbersService } from "../../../common/modules/numbers";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { AlphaMovesItem } from "../../../api/apiTypes";
import { Tooltip } from "antd";

const CurrencyStyled = styled.div.attrs({
  className: "CurrencyStyled",
})``;

interface CurrencyProps
  extends ComponentProps<any>,
    HTMLAttributes<HTMLElement> {
  value: number | undefined;
  showRawValue?: boolean;
  fixed?: number;
  showColors?: boolean;
  currency?: boolean;
  colors?: [positive?: string, negative?: string];
  prefixes?: [positive?: React.ReactNode, negative?: React.ReactNode];
  /**
   * Control the color (green/red) of the currency value
   */
  actionType?: AlphaMovesItem["actionType"];
  fontFamily?: "munki" | "sans-serif" | string;
}

const currencySymbol = "$";

export const Currency: FC<CurrencyProps> = (props) => {
  const {
    style,
    showColors,
    showRawValue,
    colors,
    value,
    fixed,
    prefixes,
    actionType,
    fontFamily,
    currency,
  } = props;
  if (!value) return <>n/a</>;

  let color;
  const greenColor = colors?.[0] ?? COLORS.green;
  const redColor = colors?.[1] ?? COLORS.red;
  let prefix = null;

  if (showColors) {
    color = value > 0 ? greenColor : redColor;
  }
  if (prefixes) {
    if (actionType) {
      color = actionType === "buy" ? greenColor : redColor;
      prefix =
        actionType === "buy" ? prefixes[0] ?? "Bought" : prefixes[1] ?? "Sold";
    } else {
      prefix = value > 0 ? prefixes[0] ?? "Bought" : prefixes[1] ?? "Sold";
    }
  }

  let asValueString: ReactNode = NumbersService.numberToNumberString(value);
  if (value < 0.0001) {
    const subscripted = NumbersService.formatNumberWithSubscript(value);
    const { integerPart, firstZero, subscript, remainingDecimal } = subscripted;
    asValueString = (
      <>
        {integerPart}.{firstZero}
        <sub>{subscript}</sub>
        {remainingDecimal}
      </>
    );
  } else if (showRawValue) {
    asValueString = NumbersService.formatNumberWithCommas(value, {
      fixed: fixed ?? 2,
    });
  }

  let finalFontFamily = undefined;
  if (fontFamily === "sans-serif")
    finalFontFamily = Styles.fontSansSerif.fontFamily;
  else if (fontFamily) finalFontFamily = fontFamily;

  return (
    <CurrencyStyled
      style={{ color, fontFamily: finalFontFamily as any, ...style }}
    >
      {prefix} {currency && currencySymbol}
      <Tooltip title={value}>
        <span style={{ fontFamily: finalFontFamily as any }}>
          {asValueString}
        </span>
      </Tooltip>
    </CurrencyStyled>
  );
};
