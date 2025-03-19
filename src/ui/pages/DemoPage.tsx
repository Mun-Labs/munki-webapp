import { Flex, TableColumnsType } from "antd";
import { FilterByTime } from "../molecules/FilterByTime/FilterByTime";
import { HorizontalFilterDemo } from "../molecules/HorizontalFilter/HorizontalFilterDemo";
import { TextWithLabel } from "../molecules/TextWithLabel/TextWithLabel";
import { TableWithFilters } from "../organisms/TableWithFilters/TableWithFilters";
import { TokenCardDemo } from "../organisms/TokenCard/TokenCardDemo";
import { IToken } from "../../domain/entities/Entities";
import { MOCK_DATA_TOKEN, MockTokens } from "../../api/MockData";
import { TextWithLabelDemo } from "../molecules/TextWithLabel/TextWithLabelDemo";
import { AvatarDemo } from "../demos/IconDemo";
import { TreeChartDemo } from "../molecules/TreeChart/TreeChartDemo";
import { AnalyticsCardDemo } from "../molecules/AnalyticsCard/AnalyticsCardDemo";
import { AvatarWithTextDemo } from "../molecules/AvatarWithText/AvatarWithTextDemo";
import { PercentageDemo } from "../atoms/Percentage/PercentageDemo";
import { TokenImageCardDemo } from "../organisms/TokenImageCard/TokenImageCardDemo";
import { MemeCoinTableDemo } from "../organisms/MemeCoinTable/MemeCoinTableDemo";
import { CurrencyDemo } from "../atoms/Currency/CurrencyDemo";
import { GridResponsivenessExample } from "../demos/GridResponsivenessExample";
import { SocialMediaSegmentDemo } from "../molecules/SocialMediaSegment/SocialMediaSegmentDemo";
import { IconDemo } from "../atoms/Icon/IconDemo";
import { WhaleWatchDemo } from "../organisms/WhaleWatch/WhaleWatchDemo";
import { TextWithDescriptionDemo } from "../molecules/TextWithDescription/TextWithDescriptionDemo";
import { CoinWithLogoAndDescriptionDemo } from "../molecules/CoinWithLogoAndDescription/CoinWithLogoAndDescriptionDemo";
import { TokenDemo } from "../atoms/Token/TokenDemo";
import { DebounceSelectDemo } from "../molecules/DebounceSelect/DebounceSelectDemo";

type HoldersTrendColumn = Pick<
  IToken,
  "name" | "accounts" | "twentyFourHourVolume" | "twentyFourHourPercentage"
>;

const columns: TableColumnsType<HoldersTrendColumn> = [
  {
    title: "Name",
    dataIndex: "name",
    showSorterTooltip: { target: "full-header" },
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ["descend"],
    render: (text) => <TextWithLabel text={text} left={<AvatarDemo />} />,
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
    sorter: (a, b) => {
      if (!a.twentyFourHourPercentage || !b.twentyFourHourPercentage) return -1;
      return a.twentyFourHourPercentage - b.twentyFourHourPercentage;
    },
  },
];

const data = MockTokens.map((token) => ({ ...token, key: token.name }));

export const DemoPage = () => {
  return (
    <>
      <h1>DemoPage</h1>
      <h2>DebounceSelectDemo</h2>
      <DebounceSelectDemo />
      <br /> <hr />
      <h2>TokenDemo</h2>
      <TokenDemo />
      <br /> <hr />
      <h2>GridResponsivenessExample</h2>
      <GridResponsivenessExample />
      <br /> <hr />
      <h2>CurrencyDemo</h2>
      <CurrencyDemo />
      <br /> <hr />
      <h2>MemeCoinTableDemo</h2>
      <MemeCoinTableDemo />
      <br /> <hr />
      <h2>TokenImageCardDemo</h2>
      <TokenImageCardDemo />
      <br /> <hr />
      <h2>TreeChartDemo</h2>
      <TreeChartDemo />
      <br /> <hr />
      <h2>PercentageDemo</h2>
      <PercentageDemo />
      <br /> <hr />
      <h2>AvatarWithTextDemo</h2>
      <AvatarWithTextDemo />
      <br /> <hr />
      <h2>AnalyticsCardDemo</h2>
      <AnalyticsCardDemo />
      <br /> <hr />
      <h2>TableWithFilters</h2>
      <Flex justify="center" align="center" style={{ width: "100%" }}>
        <div style={{ width: 800 }}>
          <TableWithFilters<HoldersTrendColumn>
            data={data}
            columns={columns}
            label="demo label 1"
          />
        </div>
      </Flex>
      <br /> <hr />
      <h2>FilterByTime</h2>
      <FilterByTime label="Demo" />
      <br /> <hr />
      <h2>HorizontalFilterDemo</h2>
      <HorizontalFilterDemo />
      <br /> <hr />
      <h2>TextWithLabel</h2>
      <TextWithLabelDemo />
      <br /> <hr />
      <h2>TextWithDescriptionDemo</h2>
      <TextWithDescriptionDemo />
      <br /> <hr />
      <h2>CoinWithLogoAndDescriptionDemo</h2>
      <CoinWithLogoAndDescriptionDemo />
      <br /> <hr />
      <h2>WhaleWatchDemo</h2>
      <WhaleWatchDemo />
      <br /> <hr />
      <h2>IconDemo</h2>
      <IconDemo />
      <br /> <hr />
      <h2>SocialMediaSegmentDemo</h2>
      <SocialMediaSegmentDemo />
      <br /> <hr />
      <h2>TokenCardDemo</h2>
      <TokenCardDemo />
    </>
  );
};
