import { Col, Flex, Grid, Row, TableColumnsType, Typography } from "antd";
import "./MunkiContent.css";
import { debugStyles, Styles } from "../../uiStyles";
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

const contentStyles: React.CSSProperties = {
  ...debugStyles,
  flexGrow: 1,
  padding: "20px",
  overflowY: "auto",
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

      <Row style={{ marginTop: 60, height: 1006 }} gutter={48}>
        <Col span={12} style={{ ...debugStyles, flexGrow: 1, height: "100%" }}>
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
        </Col>
        <Col span={12} style={{ ...debugStyles, flexGrow: 1 }}>
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
        </Col>
      </Row>
    </div>
  );
};
