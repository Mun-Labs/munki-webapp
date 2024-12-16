import { Flex, TableColumnsType, Typography } from "antd";
import "./MunkiContent.css";
import { debugStyles, Styles } from "../../uiStyles";
import { HotList } from "./HotList/HotList";
import { IToken } from "../../../domain/entities/Entities";
import { MockTokens } from "../../../api/MockData";
import { TableWithFilters } from "../TableWithFilters/TableWithFilters";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { IconDemo } from "../../demos/IconDemo";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { TreeChartDemo } from "../../molecules/TreeChart/TreeChartDemo";
import { Percentage } from "../../atoms/Percentage/Percentage";

const contentStyles: React.CSSProperties = {
  ...debugStyles,
  flexGrow: 1,
  padding: "20px",
  overflowY: "auto",
};

type HoldersTrendColumn = Pick<
  IToken,
  "name" | "accounts" | "twentyFourHourVolume" | "twentyFourHourPercentage"
>;

const holdersTrendColumns: TableColumnsType<HoldersTrendColumn> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
    render: (text) => <TextWithLabel text={text} left={<IconDemo />} />,
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

export const MunkiContent = () => {
  return (
    <div className="content" style={contentStyles}>
      <Typography.Title style={{ textAlign: "initial" }}>
        Top Memecoin Mindshare on X 🧠
      </Typography.Title>

      <Flex justify="space-between">
        <div style={{ ...debugStyles, flexGrow: 1, marginRight: 30 }}>
          <Flex justify="space-between" style={{ padding: 12 }}>
            <Typography.Title level={2} style={{ textAlign: "initial" }}>
              Memecoins Mindshare 🌑
            </Typography.Title>
            <FilterByTime />
          </Flex>
          <TreeChartDemo />
        </div>
        <div style={{ ...debugStyles, flexGrow: 3 }}>
          <TableWithFilters<HoldersTrendColumn>
            label="Smart Wallet Inflow 🧠"
            data={holdersTrendData}
            columns={holdersTrendColumns}
          />
        </div>
      </Flex>

      <HotList />

      <Flex style={{ marginTop: 60 }}>
        <div style={{ ...debugStyles, flexGrow: 1, marginRight: 48 }}>
          <TableWithFilters<HoldersTrendColumn>
            label="Smart Wallet Inflow 🧠"
            data={holdersTrendData}
            columns={holdersTrendColumns}
          />
        </div>
        <div style={{ ...debugStyles, flexGrow: 1 }}>
          <TableWithFilters<HoldersTrendColumn>
            label="Holders Trend 🧠"
            data={holdersTrendData}
            columns={holdersTrendColumns}
          />
        </div>
      </Flex>
    </div>
  );
};
