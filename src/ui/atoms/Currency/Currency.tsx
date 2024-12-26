import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { NumbersService } from "../../../common/modules/numbers";

const CurrencyStyled = styled.div.attrs({
  className: "CurrencyStyled",
})``;

interface CurrencyProps extends ComponentProps<any> {
  value: number | undefined;
}

const currencySymbol = "$";

export const Currency: FC<CurrencyProps> = (props) => {
  const { style, value } = props;

  const asValueString = NumbersService.numberToNumberString(value);

  return (
    <CurrencyStyled style={{ ...style }}>
      {currencySymbol}
      {asValueString}
    </CurrencyStyled>
  );
};
