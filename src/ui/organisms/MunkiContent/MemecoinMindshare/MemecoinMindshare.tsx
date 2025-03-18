import { MockTokens } from "../../../../api/MockData";
import { TypeService } from "../../../../common/modules/TypeService";
import { IToken } from "../../../../domain/entities/Entities";
import { ITreeChartNode } from "../../../../domain/types/Types";
import { FilterByTime } from "../../../molecules/FilterByTime/FilterByTime";
import { TreeChart } from "../../../molecules/TreeChart/TreeChart";
import { Styles } from "../../../uiStyles";
import FearAndGreedWidget from "../FearAndGreedy/FearAndGreedy";

import styled from "styled-components";

const data = TypeService.mapKeysArray<IToken, ITreeChartNode>(
  MockTokens,
  // MockTokens.slice(0, 3),
  [
    ["name", "name"],
    ["volume", "size"],
    ["logoUrl", "logoUrl"],
    ["twentyFourHourPercentage", "twentyFourHourPercentage"],
  ],
);

export const MemecoinMindshare = () => {
  return (
    <TopMemeStyled>
      <div className="section-mindshare">
        <div className="head">
          <p style={{ ...Styles.h2 }}>Memecoins Mindshare 🌑</p>
          <FilterByTime style={{ fontSize: 14 }} />
        </div>
        <TreeChart data={data} style={{ height: 440 }}></TreeChart>
      </div>
      <div className="section-memeindex">
        <FearAndGreedWidget />
      </div>
    </TopMemeStyled>
  );
};

const TopMemeStyled = styled.div.attrs({
  className: "TopMemeStyled",
})`
  overflow: hidden;
  gap: 32px;
  display: grid;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  grid-template-columns: 1fr 700px;
  margin-bottom: 24px;

  .section-mindshare {
    overflow: hidden;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
  }
  .section-memeindex {
    overflow: hidden;
  }

  @media (max-width: 1195px) {
    justify-content: center;
    align-items: center;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    .section-mindshare {
      .head {
        flex-direction: column;
      }
    }
  }

  @media (max-width: 767px) {
    .section-memeindex {
      padding-top: 24px;
    }
  }
`;
