import { Button, Dropdown, MenuProps, Space, Skeleton } from "antd";
import "./MunkiHeader.css";
import styled from "styled-components";
import { COLORS, COL_DS, UI_COLORS } from "../../colors";
import { MOCK_DATA_TOKEN_TRENDING } from "../../../api/MockData";
import { useTokenTrendingApi } from "../../../api/hooks/useTokenTrendingApi";
import { ComponentProps, FC, useMemo } from "react";
import { DownOutlined } from "@ant-design/icons";
import { RoundIcon } from "../../atoms/RoundIcon";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { Token } from "../../atoms/Token/Token";
import {
  SkeletonTextWithLabel,
  TextWithLabel,
} from "../../molecules/TextWithLabel/TextWithLabel";
import { Styles } from "../../uiStyles";
import { MunkiNavigation } from "./MunkiNavigation";
import { filterDenyListTokens } from "../../../domain/businessLogic/denyListTokens";

const headerStyles: React.CSSProperties = {
  // ...debugStyles,
  background: "#080A0C",
  position: "sticky",
  top: 0,
  textAlign: "center",
  fontSize: "1.5em",
  zIndex: 100,
  overflowX: "hidden",
  padding: "12px 0",
};

const TickerStyled = styled.div.attrs({ className: "TickerStyled" })`
  display: flex;
  color: ${COLORS.black};
  white-space: nowrap;
  overflow-x: hidden;
  height: 62px;
  width: fit-content;

  animation: ticker 120s linear infinite;
  will-change: transform;
  backface-visibility: hidden;

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

export const MunkiHeader = () => {
  const { data } = useTokenTrendingApi(undefined, MOCK_DATA_TOKEN_TRENDING);
  // const data = undefined;

  const filteredTokens = useMemo(() => {
    const filtered = filterDenyListTokens(data?.response);
    return filtered;
  }, [data?.response]);

  return (
    <section className="header" style={headerStyles}>
      <MunkiNavigation style={{ padding: "12px 52px" }} />
      <div className="tickerBackground" style={{ background: COLORS.jonquil }}>
        {!data ? (
          <div
            style={{
              height: 62,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 42,
            }}
          >
            <SkeletonTextWithLabel />
            <SkeletonTextWithLabel />
            <SkeletonTextWithLabel />
            <SkeletonTextWithLabel />
          </div>
        ) : (
          <TickerStyled>
            {filteredTokens.flatMap((token, index) => [
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
                right={<Percentage value={Number(token.volume24hPercent)} />}
                style={{ padding: "12px" }}
              ></TextWithLabel>,
            ])}
          </TickerStyled>
        )}
      </div>
    </section>
  );
};
