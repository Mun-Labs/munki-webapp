import { FC } from "react";
import styled from "styled-components";
import { Flex, Typography } from "antd";
import { MunkiHoverCard } from "../molecules/MunkiHoverCard/MunkiHoverCard";
import { AppLayout } from "../../AppLayout";

const { Title, Text } = Typography;

interface ChangelogEntryType {
  version: string;
  date: string;
  changes: {
    type: "feature" | "fix" | "improvement";
    description: string;
  }[];
}

const changelogData: ChangelogEntryType[] = [
  {
    version: "v1.2.0",
    date: "March 15, 2024",
    changes: [
      { type: "feature", description: "Added token performance metrics" },
      { type: "improvement", description: "Enhanced UI for mobile devices" },
      { type: "fix", description: "Fixed issue with Solana wallet connection" },
    ],
  },
  {
    version: "v1.1.0",
    date: "February 20, 2024",
    changes: [
      { type: "feature", description: "Integrated Telegram notifications" },
      { type: "feature", description: "Added multi-language support" },
      { type: "improvement", description: "Optimized loading performance" },
    ],
  },
  {
    version: "v1.0.0",
    date: "January 10, 2024",
    changes: [
      { type: "feature", description: "Initial release of Munki platform" },
      { type: "feature", description: "Token tracking dashboard" },
      { type: "feature", description: "Solana wallet integration" },
    ],
  },
];

const getTagColor = (type: string) => {
  switch (type) {
    case "feature":
      return "green";
    case "improvement":
      return "blue";
    case "fix":
      return "orange";
    default:
      return "default";
  }
};

const changelogItems = [
  [
    ["LANDPAGE", "🌐"],
    ["SEARCH BAR", "🔍"],
    ["MINDSHARE HEATMAP", "🧠"],
    ["SOLANA TICKER", "/solana.png"],
    ["ONCHAIN VOLUME", "📊"],
  ],
  [
    ["RESPONSIVE UI", "🌐"],
    ["API OPTIMIZATION", "⚙️"],
    ["TICKER BANNER", "🧠"],
    ["ALPHA MOVES", "🍀"],
    ["TOKEN SEARCH", "🔍"],
  ],
  [
    ["TOKEN DETAILS API", "🌐"],
    ["MARKET DATA API", "📊"],
    ["HOLDERS DETAILS", "🧠"],
    ["FRESH WALLETS", "🍀"],
    ["NOTEWORTHY WALLETS", "🎙️"],
  ],
];

export const Changelog: FC = () => {
  return (
    <AppLayout>
      <ChangelogContainer>
        <Title level={1} className="changelog-title">
          Progress Update
        </Title>

        <Flex
          gap={38}
          vertical={true}
          style={{
            width: "100%",
            alignItems: "center",
          }}
        >
          {changelogItems.map((week, weekIndex) => {
            return (
              <MunkiHoverCard
                style={{
                  width: 530,
                  minHeight: "100%",
                }}
              >
                <StyledCardContent>
                  <h1>Week {weekIndex + 1}</h1>
                  <ul>
                    {week.map(([text, icon, prefix], index) => {
                      const prefixText = prefix ? `${prefix} ` : "✅";
                      const finalIcon = icon.startsWith("/") ? (
                        <img
                          src={icon}
                          alt={text}
                          style={{ width: 50, height: 40 }}
                        />
                      ) : (
                        icon
                      );
                      return (
                        <li key={index} style={{ display: "block" }}>
                          <span className="text">{index + 1}</span>.{" "}
                          {prefixText} <span className="text">{text}</span>{" "}
                          {finalIcon}
                        </li>
                      );
                    })}
                  </ul>
                </StyledCardContent>
              </MunkiHoverCard>
            );
          })}
        </Flex>
      </ChangelogContainer>
    </AppLayout>
  );
};

const ChangelogContainer = styled.div.attrs({
  className: "ChangelogContainer",
})`
  margin: 0 auto;
  padding: 40px 20px;

  .changelog-title {
    font-size: 100px;
    margin-bottom: 40px;
    text-align: center;
    text-shadow: 0 1px 21.2px ${"#FFF8C5"};
    background: linear-gradient(to bottom, ivory, #ffefbd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const StyledCardContent = styled.div.attrs({
  className: "StyledCardContent",
})`
  h1 {
    margin-bottom: 20px;
    font-size: 52px;
    text-align: center;
    text-shadow: 0 1px 21.2px ${"#FFF8C5"};
    background: linear-gradient(to bottom, ivory, #ffefbd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul {
    font-size: 26px;

    li {
      img {
        position: relative;
        top: 7px;
        left: -15px;
      }

      .text {
        text-align: center;
        text-shadow: 0 1px 21.2px ${"#FFF8C5"};
        background: linear-gradient(to bottom, ivory, #ffefbd);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;
