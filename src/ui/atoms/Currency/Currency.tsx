import { ComponentProps, FC, HTMLAttributes } from "react";
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

  let asValueString = NumbersService.numberToNumberString(value);
  if (showRawValue) {
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
      <Tooltip title={value}>{asValueString}</Tooltip>
    </CurrencyStyled>
  );
};
