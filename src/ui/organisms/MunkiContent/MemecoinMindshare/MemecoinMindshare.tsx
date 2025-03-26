import { Flex } from "antd";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { MindshareItem } from "../../../../api/apiTypes";
import { useMindshareApi } from "../../../../api/hooks/useMindshareApi";
import { MOCK_DATA_MINDSHARE } from "../../../../api/MockData";
import { TypeService } from "../../../../common/modules/TypeService";
import { ITreeChartNode } from "../../../../domain/types/Types";
import { TreeChart } from "../../../molecules/TreeChart/TreeChart";
import { Styles } from "../../../uiStyles";
import FearAndGreedWidget from "../FearAndGreedy/FearAndGreedy";
import { COLORS } from "../../../colors";

export const MemecoinMindshare = () => {
  const { data } = useMindshareApi(undefined, MOCK_DATA_MINDSHARE);
  const [tokens, setTokens] = useState<ITreeChartNode[]>([]);

  useEffect(() => {
    if (data && data.response) {
      const mappedTokens = TypeService.mapKeysArray<
        MindshareItem,
        ITreeChartNode
      >(data.response, [
        ["name", "name"],
        ["volume", "size", (item) => Number(item)],
        ["logoUrl", "logoUrl"],
        ["changePercentage", "twentyFourHourPercentage"],
      ]);
      setTokens(mappedTokens);
    }
  }, [data]);

  return (
    <TopMemeStyled>
      <div className="section-mindshare">
        <div className="head">
          <p style={{ ...Styles.h2 }}>Memecoins Mindshare 🌑</p>
          <Flex style={{ ...Styles.fontSansSerif, color: COLORS.white60 }}>
            Updates every 24h
          </Flex>
        </div>
        <TreeChart data={tokens} style={{ height: 490 }}></TreeChart>
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
