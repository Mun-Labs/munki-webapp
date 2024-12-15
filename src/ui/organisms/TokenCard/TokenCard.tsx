import styled from "styled-components";
import "./TokenCard.css";
import { Flex } from "antd";
import { COLORS, UI_COLORS } from "../../colors";
import { MockTokens } from "../../../api/MockData";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { Styles } from "../../uiStyles";
import { IToken } from "../../../domain/entities/Entities";
import { ComponentProps, FC } from "react";

const StyledTokenCard = styled.div`
  height: 570px;
  width: 420px;
  padding: 40px 28px;
  background: ${UI_COLORS.background};
  border: 1px solid ${COLORS.white};
  border-radius: 24px;
`;

export const MunkiImage = styled.div`
  height: 360px;
  width: 360px;
  margin: 0 auto;
  margin-bottom: 20px;
  border: 1px solid ${COLORS.white};
  border-radius: 18px;
`;

interface TokenCardProps {
  token: IToken;
}

export const TokenCard: FC<TokenCardProps & ComponentProps<any>> = ({
  style,
  token,
}) => {
  if (!token) token = MockTokens[0];

  return (
    <Flex justify="center" style={{ ...style }}>
      <StyledTokenCard>
        <div style={{ position: "relative" }}>
          <MunkiImage>Image</MunkiImage>
          <Flex style={{ position: "absolute", bottom: 20, left: 20 }}>
            <div>🐋 {token.whaleCount}</div>|
            <div>📈 +{token.whaleCountPercentage}%</div>
          </Flex>
        </div>

        <Flex justify="space-between" style={{ marginBottom: 14 }}>
          <div style={{ ...Styles.h1, color: COLORS.yellow }}>{token.name}</div>
          <div>
            <span>11h</span>
            <Flex style={{ display: "inline" }}>
              {Object.entries(token.socials ?? ({} as IToken["socials"])).map(
                ([, value]) => (
                  // @ts-ignore
                  <span key={value}>{value}</span>
                ),
              )}
            </Flex>
          </div>
        </Flex>
        <Flex justify="space-between">
          <TextWithLabel
            label="Volume 24h"
            text={token.twentyFourHourVolume?.toString() ?? ""}
            right={`^${token.twentyFourHourPercentage}%`}
          ></TextWithLabel>
          <TextWithLabel
            label="Volume 24h"
            text={token.accounts?.toString() ?? ""}
            right={`^${token.accountsPercentage}%`}
          ></TextWithLabel>
        </Flex>
      </StyledTokenCard>
    </Flex>
  );
};
