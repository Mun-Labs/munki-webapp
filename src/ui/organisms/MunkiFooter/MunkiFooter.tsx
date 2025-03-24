import { Button, Flex, Row } from "antd";
import "./MunkiFooter.css";
import styled from "styled-components";
import { SocialMediaSegment } from "../../molecules/SocialMediaSegment/SocialMediaSegment";
import { SocialMedia } from "../../../domain/types/Types";
import { COLORS } from "../../colors";

const footerStyle: React.CSSProperties = {
  height: "84px",
  borderTop: "1px solid #ccc",
  background: "rgb(1, 1, 1)",
  position: "relative",
  zIndex: 10,
  padding: "0 120px",
};

const FooterButton = styled(Button)`
  color: ${COLORS.grey70};
  margin: 0 10px;
  padding: unset;
  font-size: 12px;
  p {
    color: ${COLORS.grey70};
  }
`;

const socials: SocialMedia[] = [
  {
    name: "Website",
    type: "website",
    url: "https://munki-ai.gitbook.io/munki-ai",
  },
  { name: "Telegram", type: "telegram", url: "https://t.me/elmunkibot" },
  { name: "X", type: "x", url: "https://x.com/munki_ai" },
];

export const MunkiFooter = () => {
  return (
    <Flex className="footer" style={footerStyle} justify="space-between">
      <div className="info">
        <img
          width="60"
          height="60"
          src="/munki-header.png"
          alt="munki"
          style={{
            marginLeft: 15,
            marginTop: 15,
            marginBottom: -15,
          }}
        />
        <Row>
          {/* <FooterButton type="link">Privacy Policy</FooterButton> */}
          <FooterButton type="link">
            <p>Privacy policy</p>
          </FooterButton>
          <FooterButton type="link">
            <p>Terms of Use</p>
          </FooterButton>
          {/* <FooterButton type="link">Terms of Sale</FooterButton> */}
          <FooterButton type="link">
            <p>© 2025 MUN</p>
          </FooterButton>
        </Row>
      </div>
      <div
        className="socials"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <SocialMediaSegment socials={socials} style={{ gap: 20 }} />
      </div>
    </Flex>
  );
};
