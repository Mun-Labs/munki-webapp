import { Col, Flex, Grid, Row, TableColumnsType, Typography } from "antd";
import "./MunkiContent.css";
import { debugStyles, Styles } from "../../uiStyles";
import { HotList } from "./HotList/HotList";
import { IToken } from "../../../domain/entities/Entities";
import { MockTokens } from "../../../api/MockData";
import { TableWithFilters } from "../TableWithFilters/TableWithFilters";
import { TextWithLabel } from "../../molecules/TextWithLabel/TextWithLabel";
import { IconDemo } from "../../demos/IconDemo";
import { FilterByTime } from "../../molecules/FilterByTime/FilterByTime";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { MemeCoinTable } from "../MemeCoinTable/MemeCoinTable";
import { TreeChart } from "../../molecules/TreeChart/TreeChart";
import { TypeService } from "../../../common/modules/TypeService";
import { ITreeChartNode } from "../../../domain/types/Types";

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
  const screens = Grid.useBreakpoint();

  return (
    <div className="content" style={contentStyles}>
      <Typography.Title style={{ textAlign: "initial" }}>
        Top Memecoin Mindshare on X 🧠
      </Typography.Title>

      <Row style={{ height: contentContainerHeight }}>
        <Col span={8}>
          <div style={{ ...debugStyles, flexGrow: 1, marginRight: 30 }}>
            <Row
              style={{
                ...Styles.centerVertically,
                height: contentHeaderHeight,
              }}
            >
              <Col
                xs={{ flex: "100%" }}
                sm={{ flex: "70%" }}
                md={{ flex: "100%" }}
                lg={{ flex: "100%" }}
                xl={{ flex: "100%" }}
                xxl={{ flex: "35%" }}
              >
                <Row>
                  <Col>
                    <Typography.Title
                      level={screens.xl ? 3 : 5}
                      style={{ textAlign: "initial", marginBottom: 0 }}
                    >
                      Memecoins Mindshare 🌑
                    </Typography.Title>
                  </Col>
                </Row>
              </Col>
              <Col sm={{ flex: "100%" }} xxl={{ flex: "65%" }}>
                <FilterByTime style={{ fontSize: 14 }} />
              </Col>
            </Row>
            <TreeChart
              data={data}
              style={{ height: contentHeight }}
            ></TreeChart>
          </div>
        </Col>
        <Col span={16}>
          <div style={{ ...debugStyles, flexGrow: 3 }}>
            <TableWithFilters<HoldersTrendColumn>
              label="Memecoin Index 🧠"
              data={holdersTrendData}
              columns={holdersTrendColumns}
              table={<MemeCoinTable style={{ height: contentHeight }} />}
              tableStyles={{ height: contentHeight }}
              breakWidth={600}
            />
          </div>
        </Col>
      </Row>

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
