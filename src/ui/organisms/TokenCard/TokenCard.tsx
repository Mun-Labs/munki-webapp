import styled from "styled-components";
import "./TokenCard.css";
import { Flex } from "antd";
import { COLORS, UI_COLORS } from "../../colors";
import { MockTokens } from "../../../api/MockData";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { Styles } from "../../uiStyles";
import { IToken } from "../../../domain/entities/Entities";
import { ComponentProps, FC } from "react";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { SocialMediaSegment } from "../../molecules/SocialMediaSegment/SocialMediaSegment";
import { SocialKeys, SocialMedia } from "../../../domain/types/Types";
import { Token } from "../../atoms/Token/Token";

const StyledTokenCard = styled.div`
  height: 570px;
  width: 420px;
  padding: 40px 28px;
  background: ${UI_COLORS.background};
  border-radius: 24px;
`;

export const MunkiImage = styled.div`
  height: 360px;
  width: 360px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-radius: 18px;
`;

interface TokenCardProps extends ComponentProps<any> {
  token: IToken;
}

export const TokenCard: FC<TokenCardProps> = ({ style, token }) => {
  if (!token) token = MockTokens[0];
  const socials: SocialMedia[] = [];
  Object.keys(token.socials ?? {}).forEach((key) => {
    const socialKey = key as SocialKeys;
    socials.push({
      type: socialKey,
      url: token.socials?.[socialKey] ?? "",
    });
  });

  return (
    <Flex justify="center" style={{ ...style }}>
      <StyledTokenCard>
        <div style={{ position: "relative" }}>
          <MunkiImage
            style={{
              ...Styles.backgroundImage,
              backgroundImage: `url(${token.logoUrl})`,
            }}
          ></MunkiImage>
          <Flex style={{ position: "absolute", bottom: 20, left: 20 }}>
            <div>🐋 {token.whaleCount}</div>| 📈{" "}
            <Percentage value={token.whaleCountPercentage} plusMinus />
          </Flex>
        </div>

        <Flex justify="space-between" style={{ marginBottom: 14 }}>
          <Token
            token={token}
            style={{ margin: "12px 0" }}
            textStyle={{ ...Styles.h1, color: COLORS.yellow }}
          />
          <Flex align="center">
            <span style={{ marginRight: 8 }}>11h</span>
            <SocialMediaSegment socials={socials}></SocialMediaSegment>
          </Flex>
        </Flex>
        <Flex justify="space-between">
          <TextWithLabel
            label="Volume 24h"
            text={token.twentyFourHourVolume?.toString() ?? ""}
            right={<Percentage value={token.twentyFourHourPercentage} />}
          ></TextWithLabel>
          <TextWithLabel
            label="Volume 24h"
            text={token.accounts?.toString() ?? ""}
            right={<Percentage value={token.accountsPercentage} />}
          ></TextWithLabel>
        </Flex>
      </StyledTokenCard>
    </Flex>
  );
};
