import { Flex } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { QRCode } from "react-qrcode-logo";
import { useCopyText } from "../../../../domain/hooks/useCopyText";
import { COLORS } from "../../../colors";
import { MunkiBadge } from "../../../atoms/MunkiBadge/MunkiBadge";

interface TokenDetailsPageProps extends ComponentProps<any> {}

export const Profile: FC<TokenDetailsPageProps> = (_props) => {
  // const { style } = props;
  // const params = useParams<{ tokenName: string }>();
  // const { tokenName } = params;

  const { onCopyText, isCopy } = useCopyText();

  return (
    <ProfileStyled
      align="center"
      justify="space-between"
      style={{ padding: "24px 0 24px" }}
    >
      <InfoStyled gap={44} align="start" wrap>
        <div>
          <img
            style={{ borderRadius: "12px", overflow: "hidden" }}
            src="/user4.png"
            width={300}
            height={300}
          />
        </div>
        <div>
          <p style={{ color: COLORS.yellow, fontSize: "48px" }}>
            Internosaurus
          </p>
          <Flex align="center" flex={1} style={{ fontSize: "30px" }}>
            <p>@INTERN_AI</p>
            <MunkiBadge>
              <span style={{ color: "#9EFF70" }}>$INTERN</span>
            </MunkiBadge>
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
              <p>0xh2d.......i75d</p>
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
              X.COM
            </p>
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
              Dexscreeners
            </p>
          </Flex>
        </div>
      </InfoStyled>

      <QRCode
        value={"0xh2d.......i75d"}
        bgColor="#ffffff"
        fgColor="#070709"
        logoImage="/assets/icon-sol-pixel.png"
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

const ProfileStyled = styled(Flex).attrs({ className: "ProfileStyled" })`
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
