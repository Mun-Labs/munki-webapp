import { Collapse, CollapseProps, Drawer, Flex } from "antd";
import "./MunkiHeader.css";
import { Styles } from "../../uiStyles";
import styled from "styled-components";
import { COLORS, UI_COLORS } from "../../colors";
import { MOCK_DATA_TOKEN_TRENDING, MockTokens } from "../../../api/MockData";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { Token } from "../../atoms/Token/Token";
import { RoundIcon } from "../../atoms/RoundIcon";
import { useState } from "react";
import { useTokenTrendingApi } from "../../../api/hooks/useTokenTrendingApi";

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

export const MunkiHeader = () => {
  const { data } = useTokenTrendingApi(undefined, MOCK_DATA_TOKEN_TRENDING);
  const [open, setOpen] = useState(false);

  if (!data) return;
  const tokens = data.response;
  const repeatedTokens = [...tokens, ...tokens];

  const showDrawer = () => {
    setOpen(!open);
  };

  const onClose = () => {
    setOpen(false);
  };

  const text = (
    <ul
      style={{
        whiteSpace: "nowrap",
      }}
    >
      <li>Homepage</li>
      <li>Meme radar</li>
      <li>Token insight</li>
    </ul>
  );

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Home page",
      children: text,
    },
  ];

  return (
    <section className="header" style={headerStyles}>
      <Flex
        justify="space-between"
        align="center"
        style={{ height: 64 }}
        wrap={true}
      >
        <img
          width="60"
          height="60"
          src="/munki-header.png"
          onClick={showDrawer}
          alt="munki"
        />
      </Flex>

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
      <Drawer
        title="Homepage"
        placement={"left"}
        closable={false}
        onClose={onClose}
        size="default"
        open={open}
      >
        <Collapse
          expandIconPosition="end"
          style={{ whiteSpace: "nowrap" }}
          items={items}
          bordered={false}
          size="small"
        />
      </Drawer>
    </section>
  );
};
