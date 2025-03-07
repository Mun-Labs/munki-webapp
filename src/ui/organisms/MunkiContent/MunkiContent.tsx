import { Flex, Input, TableColumnsType } from "antd";
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
import FearAndGreedWidget from "./FearAndGreedy";
import { UserOutlined } from "@ant-design/icons";

const contentStyles: React.CSSProperties = {
  padding: "20px",
  overflowX: "hidden",
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
      <TopMunkiStyled>
        <img
          width={340}
          height={340}
          src='/public/munki-landing.png'
          alt="Munki landing"
        />
      </TopMunkiStyled>

      <BigTitleStyled>Hi, I’m Munki Ai</BigTitleStyled>
      <Input size="large" style={{ flex: 1,margin: "10px 0px 24px", backgroundColor: "#242424", color: 'white', borderRadius: '8px' }} placeholder="search token" prefix={<UserOutlined />} />
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
      <div>
        <TableWithFilters<HoldersTrendColumn>
          label="Alpha moves"
          data={holdersTrendData}
          columns={holdersTrendColumns}
          table={<MemeCoinTable style={{ height: contentHeight }} />}
          tableStyles={{ height: contentHeight }}
          breakWidth={600}
        />
      </div>
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


const TopMunkiStyled = styled.div.attrs({
  className: "BigTitleStyled",
})`
display:flex;
justify-content: center;
align-items: center;
`

const BigTitleStyled = styled.div.attrs({
  className: "BigTitleStyled",
})`
  text-align: center;
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
  gap: 32px;
  display: grid;
  justify-content: center;
  align-items: start;
  flex-wrap: wrap;
  grid-template-columns: 1fr 1fr;
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
