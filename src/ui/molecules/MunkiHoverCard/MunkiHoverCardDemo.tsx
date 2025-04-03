import styled from "styled-components";
import { MunkiHoverCard } from "./MunkiHoverCard";

const StyledCardContent = styled.div.attrs({
  className: "StyledCardContent",
})`
  h1 {
    text-align: center;
    text-shadow: 0 1px 21.2px ${"#FFF8C5"};
    background: linear-gradient(to bottom, ivory, #ffefbd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 52px;
  }

  ul {
    font-size: 31px;

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

const changelogItems = [
  [
    ["LANDPAGE", "🌐"],
    ["SEARCH BAR", "🔍"],
    ["MINDSHARE HEATMAP", "🧠"],
    ["SOLANA TICKER", "/solana.png"],
    ["ONCHAIN VOLUME", "📊"],
    ["ALPHA MOVES", "🍀", "⭕"],
  ],
  [
    ["RESPONSIVE UI", "🌐"],
    ["API OPTIMIZATION", "⚙️"],
    ["TICKER BANNER", "🧠"],
    ["FEATURE: ALPHA MOVES", "🍀"],
    ["FEATURE: TOKEN SEARCH", "🔍"],
  ],
  [
    ["TOKEN DETAILS API", "🌐"],
    ["MARKET DATA API", "📊"],
    ["HOLDERS DETAILS", "🧠"],
    ["FRESH WALLETS", "🍀"],
    ["NOTEWORTHY WALLETS", "🎙️"],
  ],
];

export const MunkiHoverCardDemo = () => {
  return (
    <div style={{ width: 600 }}>
      <MunkiHoverCard>
        <StyledCardContent>
          <h1>Week 1</h1>
          <ul>
            {changelogItems[0].map(([text, icon, prefix], index) => {
              const prefixText = prefix ? `${prefix} ` : "✅";
              const finalIcon = icon.startsWith("/") ? (
                <img src={icon} alt={text} style={{ width: 50, height: 40 }} />
              ) : (
                icon
              );
              return (
                <li key={index} style={{ display: "block" }}>
                  <span className="text">{index + 1}</span>. {prefixText}{" "}
                  <span className="text">{text}</span> {finalIcon}
                </li>
              );
            })}
          </ul>
        </StyledCardContent>
      </MunkiHoverCard>
    </div>
  );
};
