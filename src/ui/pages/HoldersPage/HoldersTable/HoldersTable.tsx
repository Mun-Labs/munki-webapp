import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";
import { IconShare } from "../../../../assets/IconShare";
import { COLORS } from "../../../colors";

// Interface for holders data
interface IHolder {
  key: string;
  rank: number;
  wallet: string;
  percentage: number;
  quantity: number;
  value: number;
}

// Sample data for demonstration
const dataSource: IHolder[] = [
  {
    key: "1",
    rank: 1,
    wallet: "Wallet Alpha",
    percentage: 15.7,
    quantity: 2500000,
    value: 375000,
  },
  {
    key: "2",
    rank: 2,
    wallet: "Wallet Beta",
    percentage: 12.3,
    quantity: 1950000,
    value: 292500,
  },
  {
    key: "3",
    rank: 3,
    wallet: "Wallet Gamma",
    percentage: 8.9,
    quantity: 1420000,
    value: 213000,
  },
  {
    key: "4",
    rank: 4,
    wallet: "Wallet Delta",
    percentage: 6.2,
    quantity: 980000,
    value: 147000,
  },
];

const HoldersTableStyled = styled.div.attrs({
  className: "HoldersTableStyled",
})`
  border-radius: 12px;
  overflow: hidden;
  .head {
    display: block;
    color: ${COLORS.white};
    font-family: sans-serif !important;
    font-size: 16px;
    font-weight: 600;
    text-align: center;
  }
  .content {
    display: block;
    color: ${COLORS.white};
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 500;
    text-align: center;
  }

  .head-left {
    text-align: left;
  }

  .cl-green-custom {
    color: #54f209;
  }
  .fz-10 {
    font-size: 10px;
  }

  .tac {
    text-align: center;
  }

  .tal {
    text-align: left;
  }

  .fwb {
    font-weight: bold;
  }

  .ant-table-header {
    th.ant-table-cell {
      padding: 18px 10px !important;
      --ant-table-header-split-color: ${COLORS.black} !important;
      --ant-table-header-color: ${COLORS.white} !important;
      background-color: #223f28;
      font-family: "SF Pro Display";
      font-weight: 500;
      line-height: auto;
      &::before {
        content: none !important;
      }
    }

    thead {
      tr {
        th.ant-table-cell-fix-left-last {
          border-right: 1px solid ${COLORS.white60};
        }
        th:nth-child(2) {
          padding-left: 15px !important;
        }
      }
    }
  }

  tbody {
    tr.ant-table-measure-row {
      td {
        border-bottom: none !important;
      }
    }

    tr.ant-table-row.ant-table-row-level-0:nth-child(2) {
      background: #2c3741;
      td {
        border-bottom: none !important;
      }
    }
    tr.ant-table-row.ant-table-row-level-0:nth-child(3) {
      background: #222731;
      td {
        border-bottom: none !important;
      }
    }
    tr.ant-table-row.ant-table-row-level-0:nth-child(4) {
      background: #13151a;
    }
    tr {
      td.ant-table-cell-fix-left-last {
        border-right: 1px solid ${COLORS.white60};
      }
      td:nth-child(2) {
        padding-left: 15px !important;
      }

      td {
        border-bottom: 1px solid #898e9a !important;
      }
    }
  }
`;

interface HoldersTableProps extends ComponentProps<any> {}

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

export const HoldersTable: FC<HoldersTableProps> = (props) => {
  const { style } = props;
  const { styles } = useStyle();

  const columns: TableColumnsType<IHolder> = [
    {
      title: (
        <div
          className="head"
          style={{ textAlign: "left", color: COLORS.white }}
        >
          Rank
        </div>
      ),
      width: 70,
      dataIndex: "rank",
      key: "rank",
      render: (value) => {
        return (
          <p>
            <span className="fwb">{value}</span>{" "}
            <span className="cl-green-custom fz-10">+{value}%</span>
          </p>
        );
      },
    },
    {
      title: <div className="head">Wallet</div>,
      width: 150,
      dataIndex: "wallet",
      key: "wallet",
      render: (value) => {
        return <div className="head fwb">{value}</div>;
      },
    },
    {
      title: <div className="head">Percentage</div>,
      dataIndex: "percentage",
      key: "percentage",
      width: 120,
      render: (value) => (
        <div className="head tac cl-green-custom fwb">{value}%</div>
      ),
    },
    {
      title: <div className="head">Quantity</div>,
      dataIndex: "quantity",
      key: "quantity",
      width: 150,
      render: (value) => (
        <p className="head tac fwb">{value.toLocaleString()}</p>
      ),
    },
    {
      title: <div className="head">Value</div>,
      dataIndex: "value",
      key: "value",
      width: 150,
      render: (value) => (
        <p className="tac cl-green-custom">${value.toLocaleString()}</p>
      ),
    },
    {
      title: <div className="head">Scan</div>,
      dataIndex: "scan",
      key: "scan",
      width: 80,
      render: () => (
        <p className="tac">
          <IconShare />
        </p>
      ),
    },
  ];

  return (
    <HoldersTableStyled style={{ ...style }}>
      <Table<IHolder>
        className={styles.customTable}
        columns={columns}
        dataSource={dataSource}
        pagination={{ position: ["none", "bottomCenter"] }}
        size="middle"
        scroll={{ x: "max-content", y: 55 * 10 }}
      />
    </HoldersTableStyled>
  );
};
