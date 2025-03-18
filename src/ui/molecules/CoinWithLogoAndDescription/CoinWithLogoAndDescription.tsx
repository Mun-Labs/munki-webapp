// CoinWithLogoAndDescription
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { IToken } from "../../../domain/entities/Entities";
import { TextWithDescription } from "../TextWithDescription/TextWithDescription";
import { RoundIcon } from "../../atoms/RoundIcon";
import { Currency } from "../../atoms/Currency/Currency";
import { Styles } from "../../uiStyles";
import { Token } from "../../atoms/Token/Token";

const CoinWithLogoAndDescriptionStyled = styled.div.attrs({
  className: "CoinWithLogoAndDescriptionStyled",
})``;

interface CoinWithLogoAndDescriptionProps extends ComponentProps<any> {
  token: IToken;
}

export const CoinWithLogoAndDescription: FC<CoinWithLogoAndDescriptionProps> = (
  props,
) => {
  const { style, token } = props;
  return (
    <CoinWithLogoAndDescriptionStyled style={{ height: 45, ...style }}>
      <TextWithDescription
        text={
          <Token token={token} textStyle={{ ...Styles.ellipsis, width: 81 }} />
        }
        left={<RoundIcon src={token.logoUrl} />}
        description={
          <Currency
            value={token.marketCap}
            style={{ ...Styles.fontSansSerif }}
          ></Currency>
        }
        mainTextStyles={{ width: 91 }}
      />
    </CoinWithLogoAndDescriptionStyled>
  );
};
