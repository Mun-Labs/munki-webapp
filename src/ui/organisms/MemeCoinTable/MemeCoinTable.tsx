// MemeCoinTable
import { ComponentProps, FC } from "react";
import styled from "styled-components";

const MemeCoinTableStyled = styled.div.attrs({
  className: "MemeCoinTableStyled",
})`
  border-top: 1px solid ${COLORS.white60};

  .ant-table-header {
    th.ant-table-cell {
      --ant-table-header-split-color: ${COLORS.black} !important;
      --ant-table-header-color: ${COLORS.white60} !important;
      background-color: ${COLORS.black};
    }

    thead {
      tr {
        th:first-child {
          border-right: 1px solid ${COLORS.white60};
        }
        th:nth-child(2) {
          padding-left: 15px !important;
        }
      }
    }
  }

  .ant-table-body {
    tbody {
      tr {
        td:first-child {
          border-right: 1px solid ${COLORS.white60};
        }
        td:nth-child(2) {
          padding-left: 15px !important;
        }
      }
    }
  }
`;

interface MemeCoinTableProps extends ComponentProps<any> {}

import React from "react";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";
import { IToken } from "../../../domain/entities/Entities";
import { MockTokens } from "../../../api/MockData";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { Currency } from "../../atoms/Currency/Currency";
import { COLORS } from "../../colors";

const useStyle = createStyles(({ css, token }) => {
  const { antCls } = token as any;
  return {
    customTable: css`
      ${antCls}-table {
        ${antCls}-table-container {
          ${antCls}-table-body,
          ${antCls}-table-content {
            scrollbar-width: thin;
            scrollbar-color: #eaeaea transparent;
            scrollbar-gutter: stable;
          }
        }
      }
    `,
  };
});

interface DataType extends IToken {
  key: React.Key;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Token name",
    width: 170,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "Mindshare",
    width: 120,
    dataIndex: "mindshare",
    key: "mindshare",
    render: (value) => <Percentage value={value} neutralColor noSigns />,
  },
  {
    title: "△7D",
    dataIndex: "mindshare7D",
    key: "mindshare7D",
    width: 70,
    render: (value) => <Percentage value={value} plusMinus />,
  },
  {
    title: "Market Cap",
    dataIndex: "marketCap",
    key: "marketCap",
    width: 120,
    render: (value) => <Currency value={value} />,
  },
  {
    title: "△7D",
    dataIndex: "marketCap7D",
    key: "marketCap7D",
    width: 70,
    render: (value) => <Percentage value={value} plusMinus />,
  },
  {
    title: "Top Tweets",
    dataIndex: "topTweets",
    key: "topTweets",
    width: 150,
  },
  {
    title: "Avg Impressions",
    dataIndex: "avgImpressions",
    key: "avgImpressions",
    width: 150,
    render: (value) => <Currency value={value} />,
  },
  {
    title: "△7D",
    dataIndex: "avgImpressions7D",
    key: "avgImpressions7D",
    width: 70,
    render: (value) => <Percentage value={value} plusMinus />,
  },
  {
    title: "Avg Engagement",
    dataIndex: "avgEngagement",
    key: "avgEngagement",
    width: 150,
    render: (value) => <Currency value={value} />,
  },
  {
    title: "△7D",
    dataIndex: "avgEngagement7D",
    key: "avgEngagement7D",
    width: 70,
    render: (value) => <Percentage value={value} plusMinus />,
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 70,
    render: (value) => <Currency value={value} />,
  },
  {
    title: "△7D",
    dataIndex: "price7D",
    key: "price7D",
    width: 70,
    render: (value) => <Percentage value={value} plusMinus />,
  },
  //{ title: "Column 9", dataIndex: "address", key: "9" },
  //{ title: "Column 10", dataIndex: "address", key: "10" },
  //{ title: "Column 11", dataIndex: "address", key: "11" },
  //{ title: "Column 12", dataIndex: "address", key: "12" },
  //{ title: "Column 13", dataIndex: "address", key: "13" },
  //{ title: "Column 14", dataIndex: "address", key: "14" },
  //{ title: "Column 15", dataIndex: "address", key: "15" },
  //{ title: "Column 16", dataIndex: "address", key: "16" },
  //{ title: "Column 17", dataIndex: "address", key: "17" },
  //{ title: "Column 18", dataIndex: "address", key: "18" },
  //{ title: "Column 19", dataIndex: "address", key: "19" },
  //{ title: "Column 20", dataIndex: "address", key: "20" },
];

const dataSource: DataType[] = MockTokens.map((token) => ({
  ...token,
  key: token.name,
}));

export const MemeCoinTable: FC<MemeCoinTableProps> = (props) => {
  const { style } = props;
  const { styles } = useStyle();
  return (
    <MemeCoinTableStyled style={{ ...style }}>
      <Table<DataType>
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        pagination={{ position: ["none", "bottomCenter"] }}
        size="middle"
        scroll={{ x: "max-content", y: 55 * 10 }}
      />
    </MemeCoinTableStyled>
  );
};
