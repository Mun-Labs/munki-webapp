import { Flex, TableColumnsType } from "antd";
import "./MunkiContent.css";
import { Styles } from "../../uiStyles";
import { HotList } from "./HotList/HotList";
import { IToken } from "../../../domain/entities/Entities";
import { MockTokens, MockWhaleWatch } from "../../../api/MockData";
import { TableWithFilters } from "../TableWithFilters/TableWithFilters";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { MemeCoinTable } from "../MemeCoinTable/MemeCoinTable";
import { TreeChart } from "../../molecules/TreeChart/TreeChart";
import { TypeService } from "../../../common/modules/TypeService";
import { ITreeChartNode } from "../../../domain/types/Types";
import { COLORS } from "../../colors";
import { WhaleWatch } from "../WhaleWatch/WhaleWatch";
import { RoundIcon } from "../../atoms/RoundIcon";
import { Token } from "../../atoms/Token/Token";
import styled from "styled-components";

const contentStyles: React.CSSProperties = {
  padding: "20px",
  overflowX: "auto",
};

type HoldersTrendColumn = Pick<
  IToken,
  | "name"
  | "accounts"
  | "twentyFourHourVolume"
  | "twentyFourHourPercentage"
  | "logoUrl"
>;

const holdersTrendColumns: TableColumnsType<HoldersTrendColumn> = [
  {
    title: "Token Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
    render: (_, record) => (
      <TextWithLabel
        text={<Token token={record as any} textStyle={{ ...Styles.h2 }} />}
        left={<RoundIcon src={record.logoUrl} />}
      />
    ),
  },
  {
    title: "Holders",
    dataIndex: "accounts",
    defaultSortOrder: "descend",
    sorter: (a, b) => {
      if (!a.accounts || !b.accounts) return -1;
      return a.accounts - b.accounts;
    },
  },
  {
    title: "24H",
    dataIndex: "twentyFourHourVolume",
    sorter: (a, b) => {
      if (!a.twentyFourHourVolume || !b.twentyFourHourVolume) return -1;
      return a.twentyFourHourVolume - b.twentyFourHourVolume;
    },
  },
  {
    title: "24H%",
    dataIndex: "twentyFourHourPercentage",
    render: (value) => <Percentage value={value} />,
    sorter: (a, b) => {
      if (!a.twentyFourHourPercentage || !b.twentyFourHourPercentage) return -1;
      return a.twentyFourHourPercentage - b.twentyFourHourPercentage;
    },
  },
];

const holdersTrendData = MockTokens.map((token) => ({
  ...token,
  key: token.name,
}));

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

const contentContainerHeight = 653;
const contentHeaderHeight = 82;
const contentHeight = contentContainerHeight - contentHeaderHeight - 2; // - 2 for border

export const MunkiContent = () => {
  return (
    <div className="content" style={contentStyles}>
      <BigTitleStyled>Top Memecoin Mindshare on X 🧠</BigTitleStyled>

      <TopMemeStyled>
        <div className="section-mindshare">
          <div className="head">
            <p style={{ ...Styles.h2 }}>Memecoins Mindshare 🌑</p>
            <FilterByTime style={{ fontSize: 14 }} />
          </div>
          <TreeChart data={data} style={{ height: contentHeight }}></TreeChart>
        </div>
        <div className="section-memeindex">
          <TableWithFilters<HoldersTrendColumn>
            label="Memecoin Index 🧠"
            data={holdersTrendData}
            columns={holdersTrendColumns}
            table={<MemeCoinTable style={{ height: contentHeight }} />}
            tableStyles={{ height: contentHeight }}
            breakWidth={600}
          />
        </div>
      </TopMemeStyled>
      <HotList />
      <WhaleWatchStyled>
        <TableWithFilters<HoldersTrendColumn>
          label={
            <Flex align="center">
              <span>Whale Watch</span>
              <div
                style={{
                  width: 8,
                  height: 8,
                  marginLeft: 8,
                  borderRadius: 16,
                  backgroundColor: COLORS.green55,
                }}
              ></div>
            </Flex>
          }
          description="Track what whales are buying and selling in real time."
          table={<WhaleWatch whales={MockWhaleWatch} />}
          data={[]}
          columns={[]}
        />
        <TableWithFilters<HoldersTrendColumn>
          label={
            <Flex align="center">
              <span>Holders Watch</span>
              <div
                style={{
                  width: 8,
                  height: 8,
                  marginLeft: 8,
                  borderRadius: 16,
                  backgroundColor: COLORS.green55,
                }}
              ></div>
            </Flex>
          }
          description="Show trending token holders over time to indicate growth or decline in interest."
          data={holdersTrendData}
          columns={holdersTrendColumns}
        />
      </WhaleWatchStyled>
    </div>
  );
};

const BigTitleStyled = styled.div.attrs({
  className: "BigTitleStyled",
})`
  font-size: 80px;
  padding: 18px 0;

  @media (max-width: 767px) {
    text-align: center;
    padding: 12px;
  }
`;

const TopMemeStyled = styled.div.attrs({
  className: "TopMemeStyled",
})`
  overflow: hidden;
  gap: 12px;
  display: grid;
  justify-content: center;
  align-items: start;
  grid-template-columns: 560px 1fr;
  /* grid-template-rows: 500px 500px; */

  .section-mindshare {
    overflow: hidden;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  .section-memeindex {
    overflow: hidden;
  }

  @media (max-width: 821px) {
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

const WhaleWatchStyled = styled.div.attrs({ className: "WhaleWatchStyled" })`
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 34px;

  .TableWithFiltersStyled {
    overflow-y: scroll;
  }

  @media (max-width: 1324px) {
    flex-direction: column;
  }
`;
