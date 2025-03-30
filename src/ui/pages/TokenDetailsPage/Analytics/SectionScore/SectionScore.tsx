import { Slider, SliderSingleProps } from "antd";
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import FearAndGreedyChart from "../../../../organisms/FearAndGreedyChart/FearAndGreedyChart";
import { COLORS } from "../../../../colors";
import { TopFollowerItem } from "./TopFollowerItem";
import { useTokenAnalyticsStore } from "../../../../../store/tokenAnalytics/useTokenAnalytics";

const marks: SliderSingleProps["marks"] = {
  0: "0",
  25: "25",
  50: "50",
  75: "75",
  100: "100",
};

interface SectionScoreProps extends ComponentProps<any> {}

export const SectionScore: FC<SectionScoreProps> = () => {
  const { data: tokenAnalyticsData } = useTokenAnalyticsStore();

  const munScore = 103;

  return (
    <SectionScoreStyled>
      <div className="mun-score wrap-score">
        <h3>Mun score</h3>

        <h4
          style={{
            marginTop: "32px",
            color: COLORS.white60,
            fontSize: "34px",
          }}
        >
          Level 7: Alpha
        </h4>
        <h4
          style={{
            color: COLORS.chlorophyll_green,
            fontSize: "78px",
          }}
        >
          {munScore ?? "n/a"} PTS
        </h4>

        <div style={{ width: "98%" }}>
          <Slider marks={marks} value={103} />
        </div>
      </div>
      <div className="risk-score wrap-score">
        <h3>Risk score</h3>
        <div
          style={{
            marginTop: "0px",
            transform: "scale(0.8)",
          }}
        >
          <FearAndGreedyChart
            isReverse={true}
            isShowNumber={false}
            value={103}
          />
        </div>
        <h4 className="safe">Safe</h4>
        <h4 className="safe-value">{103}</h4>
      </div>

      <div className="top-followers wrap-score">
        <h3>Top Followers</h3>

        <div className="header">
          <p>Profile</p>
          <p>Followers</p>
        </div>
        {tokenAnalyticsData?.topFollowers
          ?.slice(0, 5)
          .map((follower, index) => {
            return <TopFollowerItem key={follower.tag + index} {...follower} />;
          })}
      </div>
    </SectionScoreStyled>
  );
};

const TopFollowersItemStyled = styled.div.attrs({
  className: "TopFollowersItemStyled",
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin: 10px 0;

  .profile {
    gap: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profile-img {
      border-radius: 50%;
    }
    .profile-info {
      .profile-info--xname {
        /* font-family: Arial, Helvetica, sans-serif; */
        color: ${COLORS.grey50};
        font-size: 15px;
      }
      .profile-info--name {
        /* font-family: Arial, Helvetica, sans-serif; */
        font-weight: 600;
        font-size: 20px;
      }
    }
  }

  .follower {
    font-size: 38px;
    font-weight: 600;
    color: ${COLORS.grey50};
  }

  @media (max-width: 800px) {
    .profile {
      .profile-info {
        .profile-info--name {
          font-size: 16px;
        }
      }
    }
    .follower {
      font-size: 24px;
    }
  }
`;

const SectionScoreStyled = styled.div.attrs({
  className: "SectionScoreStyled",
})`
  border: 1px solid ${COLORS.magenta};
  display: grid;
  grid-template-columns: 1.2fr 0.7fr 0.8fr;
  grid-template-areas: "munScore riskScore topFollowers";

  .mun-score {
    grid-area: munScore;
  }
  .risk-score {
    grid-area: riskScore;
  }
  .top-followers {
    grid-area: topFollowers;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        min-width: 134px;
      }
    }
  }

  & > div:last-child {
    border-right: none;
  }
  & > div {
    padding: 24px;
    border-right: 1px solid ${COLORS.magenta};
  }

  .wrap-score {
    padding: 12px;
    h3 {
      font-size: 28px;
    }

    .safe {
      font-size: 38px;
      color: ${COLORS.green55};
    }
    .safe-value {
      font-size: 84px;
      background: #abef50;
      background: linear-gradient(to right, #abef50 0%, #74f023 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  @media (max-width: 1315px) {
    /* grid-template-columns: 1.2fr 0.7fr; */

    grid-template-columns: 0.7fr 0.7fr 0.8fr;
  }

  @media (max-width: 1070px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      "munScore munScore"
      "riskScore topFollowers";

    .mun-score {
      border-right: transparent;
    }
    .risk-score,
    .top-followers {
      border-top: 1px solid ${COLORS.magenta};
    }
  }

  @media (max-width: 800px) {
    .risk-score {
      border-right: transparent;
    }
    grid-template-columns: 1fr;
    grid-template-areas:
      "munScore"
      "riskScore"
      "topFollowers";

    .top-followers {
      .header {
        display: none;
      }
    }
  }
`;
