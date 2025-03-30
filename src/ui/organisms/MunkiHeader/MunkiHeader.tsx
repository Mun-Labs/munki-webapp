import { Button, Dropdown, Flex, MenuProps, Space } from "antd";
import "./MunkiHeader.css";
import styled from "styled-components";
import { COLORS, COL_DS, UI_COLORS } from "../../colors";
import { MOCK_DATA_TOKEN_TRENDING } from "../../../api/MockData";
import { useTokenTrendingApi } from "../../../api/hooks/useTokenTrendingApi";
import { ComponentProps, FC } from "react";
import { SocialMediaSegment } from "../../molecules/SocialMediaSegment/SocialMediaSegment";
import { SocialMedia } from "../../../domain/types/Types";
import Icon, { SmileOutlined, DownOutlined } from "@ant-design/icons";
import { RoundIcon } from "../../atoms/RoundIcon";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { Token } from "../../atoms/Token/Token";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { Styles } from "../../uiStyles";

const headerStyles: React.CSSProperties = {
  // ...debugStyles,
  background: "#080A0C",
  position: "sticky",
  top: 0,
  textAlign: "center",
  fontSize: "1.5em",
  zIndex: 10,
  overflowX: "hidden",
  padding: "12px",
};

const TickerStyled = styled.div.attrs({ className: "TickerStyled" })`
  display: flex;
  color: ${COLORS.black};
  background: ${COLORS.jonquil};
  white-space: nowrap;
  overflow-x: hidden;
  height: 62px;
  width: fit-content;

  animation: ticker 60s linear infinite;

  @keyframes ticker {
    0% {
      transform: translateX(1%);
    }
    100% {
      transform: translateX(-80%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }

  & > * {
    flex-shrink: 0;
    margin-right: 0;
  }
`;

const socials: SocialMedia[] = [
  { name: "Telegram", type: "telegram", url: "https://t.me/elmunkibot" },
  { name: "X", type: "x", url: "https://x.com/munki_ai" },
];

export const ComingSoonButton: FC<ComponentProps<any>> = ({ style }) => {
  return (
    <Button
      style={{
        background: COL_DS.secondary,
        border: "none",
        borderRadius: 10,
        padding: "8px 10px",
        ...style,
      }}
    >
      Coming Soon
    </Button>
  );
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        Coming Soon
      </a>
    ),
  },
];

export const NavigationDropdown: FC<ComponentProps<any>> = ({
  text,
  style,
}) => {
  return (
    <div style={{ marginLeft: 40, ...style }}>
      <Dropdown menu={{ items }}>
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            {text}
            <DownOutlined />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export const MunkiNavigation: FC = (props) => {
  // Homepage Trending Meme Radar Changelogs | X Telegram Log In Sol Eng

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ height: 88 }}
      wrap={true}
    >
      <Flex className="left">
        <img
          width="60"
          height="60"
          src="/munki-header.png"
          // onClick={showDrawer}
          alt="munki"
        />
        <div
          className="navigation"
          style={{
            marginLeft: 60,
            display: "flex",
            alignItems: "center",
            gap: 50,
          }}
        >
          <a href="#" style={{ color: COL_DS.text300 }}>
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
        </div>
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

        <Button
          style={{
            marginLeft: 20,
            padding: "8px 23px",
            border: `2px solid ${COL_DS.secondary}`,
            borderRadius: 16,
            background: COL_DS.primary400,
            color: COL_DS.secondary,
          }}
        >
          Log In
        </Button>

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

export const MunkiHeader = () => {
  const { data } = useTokenTrendingApi(undefined, MOCK_DATA_TOKEN_TRENDING);

  if (!data) return;
  const tokens = data.response;
  const repeatedTokens = [...tokens, ...tokens];

  return (
    <section className="header" style={headerStyles}>
      <MunkiNavigation />

      <TickerStyled style={{ height: 62 }}>
        {repeatedTokens.map((token, index) => (
          <TextWithLabel
            key={`${token.name}-${index}`}
            text={
              <Token
                token={token}
                textStyle={{
                  color: UI_COLORS.reversePrimaryText,
                  ...Styles.h2,
                }}
              />
            }
            left={<RoundIcon src={token.logoUri} size={38} />}
            right={<Percentage value={token.volume24hChange} />}
            style={{ padding: "12px" }}
          ></TextWithLabel>
        ))}
      </TickerStyled>
    </section>
  );
};
