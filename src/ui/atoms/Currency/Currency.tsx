import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { NumbersService } from "../../../common/modules/numbers";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { AlphaMovesItem } from "../../../api/apiTypes";

const CurrencyStyled = styled.div.attrs({
  className: "CurrencyStyled",
})``;

interface CurrencyProps extends ComponentProps<any> {
  value: number | undefined;
  showColors?: boolean;
  prefixes?: [positive?: React.ReactNode, negative?: React.ReactNode];
  /**
   * Control the color (green/red) of the currency value
   */
  actionType?: AlphaMovesItem["actionType"];
}

const currencySymbol = "$";

export const Currency: FC<CurrencyProps> = (props) => {
  const { style, showColors, value, prefixes, actionType } = props;
  if (!value) return <>n/a</>;

  let color;
  let prefix = null;

  if (showColors) {
    color = value > 0 ? COLORS.green : COLORS.red;
  }
  if (prefixes) {
    if (actionType) {
      color = actionType === "buy" ? COLORS.green : COLORS.red;
      prefix =
        actionType === "buy"
          ? (prefixes[0] ?? "Bought")
          : (prefixes[1] ?? "Sold");
    } else {
      prefix = value > 0 ? (prefixes[0] ?? "Bought") : (prefixes[1] ?? "Sold");
    }
  }
  const asValueString = NumbersService.numberToNumberString(value);

  return (
    <CurrencyStyled
      style={{ color, ...style, fontFamily: Styles.fontSansSerif.fontFamily }}
    >
      {prefix} {currencySymbol}
      {asValueString}
    </CurrencyStyled>
  );
};
