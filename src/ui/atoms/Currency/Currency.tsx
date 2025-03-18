import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { NumbersService } from "../../../common/modules/numbers";
import { COLORS } from "../../colors";

const CurrencyStyled = styled.div.attrs({
  className: "CurrencyStyled",
})``;

interface CurrencyProps extends ComponentProps<any> {
  value: number | undefined;
  showColors?: boolean;
  prefixes?: [positive?: React.ReactNode, negative?: React.ReactNode];
}

const currencySymbol = "$";

export const Currency: FC<CurrencyProps> = (props) => {
  const { style, showColors, value, prefixes } = props;
  if (!value) return <>N/A</>;

  let color;
  let prefix = null;

  if (showColors) {
    color = value > 0 ? COLORS.green : COLORS.red;
  }
  if (prefixes) {
    prefix = value > 0 ? prefixes[0] ?? "Bought" : prefixes[1] ?? "Sold";
  }
  const asValueString = NumbersService.numberToNumberString(value);

  return (
    <CurrencyStyled style={{ ...style, color }}>
      {prefix} {currencySymbol}
      {asValueString}
    </CurrencyStyled>
  );
};
