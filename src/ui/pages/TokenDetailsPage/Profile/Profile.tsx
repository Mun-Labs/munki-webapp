import { Flex, Spin } from "antd";
import { ComponentProps, FC, useEffect, useState } from "react";
import styled from "styled-components";
import { QRCode } from "react-qrcode-logo";
import { useCopyText } from "../../../../domain/hooks/useCopyText";
import { COLORS } from "../../../colors";
import { MunkiBadge } from "../../../atoms/MunkiBadge/MunkiBadge";
import { useParams } from "react-router";
import { useTokenDetailApi } from "../../../../api/hooks/useTokenDetailApi";
import { TokenDetail } from "../../../../api/apiTypes";

interface TokenDetailsPageProps extends ComponentProps<any> {}

export const Profile: FC<TokenDetailsPageProps> = (_props) => {
  // const { style } = props;
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;

  const [tokenData, setTokenData] = useState<TokenDetail | null>(null);
  const { data, isLoading } = useTokenDetailApi(tokenName!); // on details page, should have param

  useEffect(() => {
    if (data && !isLoading) {
      setTokenData(data.response);
    }
  }, [data, isLoading]);

  const { onCopyText, isCopy } = useCopyText();

  if (!tokenData) {
    return (
      <ProfileStyled>
        <Spin size="large" />
      </ProfileStyled>
    );
  }

  return (
    <ProfileStyled>
      <InfoStyled gap={44} align="start" wrap>
        <div>
          <img
            style={{ borderRadius: "12px", overflow: "hidden" }}
            src={tokenData.logoUri}
            width={300}
            height={300}
          />
        </div>
        <div>
          <p style={{ color: COLORS.yellow, fontSize: "48px" }}>
            {tokenData?.name}
          </p>
          <Flex style={{ fontSize: "30px" }}>
            <MunkiBadge>
              <span style={{ color: "#9EFF70" }}>
                ${tokenData?.symbol.toLocaleUpperCase()}
              </span>
            </MunkiBadge>
            {/* <p>@INTERN_AI</p> */}
          </Flex>
          <Flex
            justify="space-between"
            style={{
              background: "#595959",
              borderRadius: "8px",
              padding: "0 4px 0 10px",
              marginTop: "12px",
            }}
          >
            <Flex align="center" gap={12}>
              <img src="/icon-solana.png" width={30} height={30} />
              <p>${tokenData.tokenAddress}</p>
            </Flex>
            <img
              style={{
                cursor: "pointer",
              }}
              onClick={() => onCopyText("0xh2d.......i75d")}
              src={isCopy ? "/checked.svg" : "/icon-copy.png"}
              width={40}
              height={40}
            />
          </Flex>
          <Flex gap={12} style={{ marginTop: "24px" }}>
            {<LinkChip name="X" />}
            {
              <LinkChip
                name="Birdeye"
                uri={`https://www.birdeye.so/token/${tokenData.tokenAddress}?chain=solana`}
              />
            }
            {
              <LinkChip
                name="Dexscreener"
                uri={`https://dexscreener.com/solana/${tokenData.tokenAddress}`}
              />
            }
            {
              <LinkChip
                name="Dexstools"
                uri={`https://www.dextools.io/app/en/solana/pair-explorer/${tokenData.tokenAddress}`}
              />
            }
          </Flex>
        </div>
      </InfoStyled>

      <QRCode
        value={tokenData.tokenAddress}
        bgColor="#ffffff"
        fgColor="#070709"
        logoPaddingStyle="square"
        logoPadding={3}
        removeQrCodeBehindLogo
        logoWidth={100}
        logoHeight={100}
        style={{ width: "180px", height: "180px", borderRadius: "12px" }}
        size={150}
        enableCORS={true}
      />
    </ProfileStyled>
  );
};

const ProfileStyled = styled(Flex).attrs({
  align: "center",
  justify: "space-between",
  className: "ProfileStyled",
})`
  padding: 24px 0 24px;

  @media (max-width: 1010px) {
    flex-direction: column-reverse;
    gap: 44px;
  }
`;

const InfoStyled = styled(Flex).attrs({ className: "InfoStyled" })`
  @media (max-width: 752px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 44px;
  }
`;

function LinkChip({ uri, name }: { uri?: string; name?: string }) {
  return (
    <a href={uri} rel="noreferrer noopener" target="_blank">
      <p
        style={{
          padding: "8px 20px",
          background: "#fff",
          color: COLORS.black,
          borderRadius: "18px",
          lineHeight: "normal",
          fontSize: "28px",
          cursor: "pointer",
        }}
      >
        {name}
      </p>
    </a>
  );
}
