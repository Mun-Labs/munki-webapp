import { TableColumnsType } from "antd";
import { IToken } from "../../../../domain/entities/Entities";
import { TextWithLabel } from "../../../molecules/TextWithLabel/TextWithLabel";
import { Token } from "../../../atoms/Token/Token";
import { RoundIcon } from "../../../atoms/RoundIcon";
import { Styles } from "../../../uiStyles";
import { Percentage } from "../../../atoms/Percentage/Percentage";
import { MockTokens } from "../../../../api/MockData";
import { TableWithFilters } from "../../TableWithFilters/TableWithFilters";
import { MemeCoinTable } from "../../MemeCoinTable/MemeCoinTable";

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


const contentContainerHeight = 653;
const contentHeaderHeight = 82;
const contentHeight = contentContainerHeight - contentHeaderHeight - 2; // - 2 for border

export const AlphaMove = () => {
  return (
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
  );
};


