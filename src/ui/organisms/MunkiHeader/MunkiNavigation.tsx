import { MenuOutlined } from "@ant-design/icons";
import { Flex, Drawer } from "antd";
import { FC, ComponentProps, useState } from "react";
import { SocialMedia } from "../../../domain/types/Types";
import { RoundIcon } from "../../atoms/RoundIcon";
import { COL_DS } from "../../colors";
import { SocialMediaSegment } from "../../molecules/SocialMediaSegment/SocialMediaSegment";
import { ComingSoonButton, NavigationDropdown } from "./MunkiHeader";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { MunkiLogin } from "./MunkiLogin";

const breakpoint = 1500;

const MobileMenuButton = styled.div`
  display: none;
  cursor: pointer;
  font-size: 24px;
  color: ${COL_DS.text300};

  @media (max-width: ${breakpoint}px) {
    display: flex;
    align-items: center;
    margin-left: 15px;
  }
`;

const DesktopNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 60px;

  @media (max-width: ${breakpoint}px) {
    display: none;
  }
`;

const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

const socials: SocialMedia[] = [
  { name: "Telegram", type: "telegram", url: "https://t.me/elmunkibot" },
  { name: "X", type: "x", url: "https://x.com/munki_ai" },
];

export const MunkiNavigation: FC<ComponentProps<any>> = ({ style }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Homepage Trending Meme Radar Changelogs | X Telegram Log In Sol Eng

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ height: 88, ...style }}
      wrap={true}
    >
      <Flex className="left" align="center">
        <img
          width="60"
          height="60"
          src="/munki-header.png"
          onClick={() => navigate("/")}
          alt="munki"
          style={{ cursor: "pointer" }}
        />

        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <MenuOutlined />
        </MobileMenuButton>

        <DesktopNavigation className="navigation">
          <a href="/#" style={{ color: COL_DS.text300 }}>
            Home
          </a>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: COL_DS.text300,
            }}
          >
            Trending <ComingSoonButton style={{ marginLeft: 10 }} />
          </a>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: COL_DS.text300,
            }}
          >
            Meme Radar <ComingSoonButton style={{ marginLeft: 10 }} />
          </a>
          <a href="#changelogs" style={{ color: COL_DS.text300 }}>
            Changelogs
          </a>
        </DesktopNavigation>

        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setMobileMenuOpen(false)}
          open={mobileMenuOpen}
          width={280}
          styles={{
            body: { padding: 0 },
          }}
        >
          <MobileMenuContent>
            <a href="/#" style={{ color: COL_DS.text300 }}>
              Home
            </a>
            <a style={{ color: COL_DS.text300 }}>
              Trending <ComingSoonButton style={{ marginLeft: 10 }} />
            </a>
            <a style={{ color: COL_DS.text300 }}>
              Meme Radar <ComingSoonButton style={{ marginLeft: 10 }} />
            </a>
            <a href="#changelogs" style={{ color: COL_DS.text300 }}>
              Changelogs
            </a>
            <div style={{ marginTop: 20 }}>
              <SocialMediaSegment
                socials={socials}
                style={{ gap: 20, color: COL_DS.baseWhite }}
              />
            </div>
          </MobileMenuContent>
        </Drawer>
      </Flex>

      <Flex className="right" align="center">
        <div
          className="socials"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <SocialMediaSegment
            socials={socials}
            style={{ gap: 20, color: COL_DS.baseWhite }}
          />
        </div>

        <MunkiLogin />

        <NavigationDropdown
          text={
            <div>
              <RoundIcon src="/solana.png" style={{ marginRight: 12 }} />
              Sol
            </div>
          }
        />
        <NavigationDropdown text={<div>Eng</div>} />
      </Flex>
    </Flex>
  );
};
