import { Flex, TableColumnsType } from "antd";
import styled from "styled-components";
import { IToken } from "../../../../domain/entities/Entities";
import { TextWithLabel } from "../../../molecules/TextWithLabel/TextWithLabel";
import { Token } from "../../../atoms/Token/Token";
import { RoundIcon } from "../../../atoms/RoundIcon";
import { Styles } from "../../../uiStyles";
import { Percentage } from "../../../atoms/Percentage/Percentage";
import { MockTokens, MockWhaleWatch } from "../../../../api/MockData";
import { TableWithFilters } from "../../TableWithFilters/TableWithFilters";
import { WhaleWatch } from "../../WhaleWatch/WhaleWatch";
import { COLORS } from "../../../colors";

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

export const WhaleWatchContent = () => {
  return (
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
  );
};

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
