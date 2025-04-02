import { ComponentProps, FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Table } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";
import TopHoldingItem from "./TopHoldingItem/TopHoldingItem";
import { COL_DS, COLORS } from "../../../../colors";
import {
  ITopHolder,
  ITopHolding,
} from "../../../../../domain/entities/Entities";
import { IconShare } from "../../../../../assets/IconShare";
import { useTopHoldersApi } from "../../../../../api/hooks/v2/useV2Api";
import { useParams } from "react-router";
import { TypeService } from "../../../../../common/modules/TypeService";
import { TopHoldersTokenItem } from "../../../../../api/apiTypes";
import { SimpleAddress } from "../../../../atoms/Address/Address";
import { Currency } from "../../../../atoms/Currency/Currency";
import { Percentage } from "../../../../atoms/Percentage/Percentage";
import { MOCK_DATA_TOP_HOLDERS } from "../../../../../api/MockDataV2";

const TopHolderTableStyled = styled.div.attrs({
  className: "TopHolderTableStyled",
})`
  /* this one prepare for add class that rowitem has new data */
  /* .active.ant-table-row-level-0 {
    .ant-table-cell {
      background-color: #000;
      animation: rowActive 3s infinite;
    }
  }

  @keyframes rowActive {
    0% {
      background: #403b19;
    }

    100% {
      background: #000;
    }
  } */

  .ant-table-row {
    border-bottom: 1px solid red;
  }

  /* border-top: 1px solid ${COLORS.white60}; */

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

  .topHolding {
    gap: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
        th:first-child {
        }
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
      td:first-child {
      }
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

interface TopHolderTableProps extends ComponentProps<any> {}

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

export const TopHolderTable: FC<TopHolderTableProps> = (props) => {
  const { style } = props;
  const { styles } = useStyle();
  const params = useParams<{ tokenName: string }>();
  const { tokenName } = params;
  const { data: apiData, isLoading } = useTopHoldersApi(
    tokenName!,
    {},
    MOCK_DATA_TOP_HOLDERS,
    { forceMock: true },
  );
  const [topHolders, setTopHolders] = useState<ITopHolder[]>([]);

  useEffect(() => {
    if (apiData?.data?.items) {
      const items = apiData.data.items;
      const mapping = TypeService.mapKeysArray<TopHoldersTokenItem, ITopHolder>(
        items,
        [
          ["count", "rank"],
          ["wallet", "wallet"],
          ["net_worth", "netWorth"],
          ["amount", "holdingValue"],
          ["share_in_percent", "holdingPercent"],
        ],
      );

      const topHolders = items.map<ITopHolding[]>((item, index) => {
        const aggr = [
          item.first_top_holding,
          item.second_top_holding,
          item.third_top_holding,
        ];
        const mappedAggr: ITopHolding[] = [];
        aggr.forEach((item) => {
          if (typeof item === "number") return;
          const mapped = {
            name: item.name,
            address: item.address,
            image: item.logoURI,
            volume: item.uiAmount,
            percent: 0,
          };
          mappedAggr.push(mapped as any);
        });
        return mappedAggr;
      });

      const mappingWithTopHoldings = mapping.map((item, index) => {
        const topHoldings = topHolders[index];
        return {
          ...item,
          topHoldings,
        };
      });

      setTopHolders(mappingWithTopHoldings);
    }
  }, [apiData]);

  const columns: TableColumnsType<ITopHolder> = [
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
      render: (value, _record) => {
        return (
          <p style={{ paddingLeft: 16 }}>
            <span className="fwb">{value}</span>{" "}
            {/* <span className="cl-green-custom fz-10">+12%</span> */}
          </p>
        );
      },
    },
    {
      title: <div className="head">Wallet</div>,
      width: 100,
      dataIndex: "wallet",
      key: "wallet",
      render: (_value) => {
        // return <div className="head fwb">{_value}</div>;
        return <SimpleAddress address={_value} />;
      },
    },
    {
      title: <div className="head">Net Worth</div>,
      width: 170,
      dataIndex: "netWorth",
      key: "netWorth",
      render: (_value) => (
        <Currency
          className="head cl-green-custom fwb"
          value={_value}
          showRawValue
          fontFamily="sans-serif"
          currency
          style={{
            textAlign: "center",
            fontWeight: 600,
            color: COL_DS.green,
            fontSize: 16,
          }}
        ></Currency>
      ),
    },
    {
      title: <div className="head">Holding Value</div>,
      dataIndex: "holdingValue",
      key: "holdingValue",
      width: 200,
      render: (value, record) => (
        <div
          className="head tac cl-green-custom fwb"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Currency
            className="head cl-green-custom fwb"
            value={value}
            showRawValue
            fontFamily="sans-serif"
            currency
            style={{
              textAlign: "center",
              fontWeight: 600,
              color: COL_DS.green,
              fontSize: 16,
              marginRight: 8,
            }}
          ></Currency>{" "}
          (
          <Percentage
            value={record.holdingPercent}
            $fontFamily="sans-serif"
            fractionDigits={2}
            noSigns
            colors={[COL_DS.green]}
          />
          )
        </div>
      ),
    },
    // {
    //   title: <div className="head">Avg. Win Rate</div>,
    //   dataIndex: "winRate",
    //   key: "winRate",
    //   width: 140,
    //   render: (_value) => <p className="tac cl-green-custom">{_value}%</p>,
    // },
    {
      title: <div className="head">Avg. Holding Time</div>,
      dataIndex: "holdingTime",
      key: "holdingTime",
      width: 170,
      render: (_value) => (
        <p className="head cl-green-custom tac fwb">150hours</p>
      ),
    },
    {
      title: <div className="head tal">Top Holdings</div>,
      dataIndex: "topHoldings",
      key: "topHoldings",
      width: 420,
      render: (_, record) => {
        return (
          <div className="topHolding">
            {record.topHoldings.map((item, index) => {
              return (
                <TopHoldingItem
                  key={index}
                  image={item.image}
                  address={item.address}
                  name={item.name}
                  volume={item.volume}
                  percent={item.percent}
                />
              );
            })}
            {/* <TopHoldingItem />
            <TopHoldingItem />
            <TopHoldingItem /> */}
          </div>
        );
      },
    },
    {
      title: <div className="head">Scan</div>,
      dataIndex: "scan",
      key: "scan",
      width: 100,
      render: (_, record) => (
        <p className="tac">
          <a
            href={`https://solscan.io/account/${record.wallet}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: COLORS.white }}
          >
            <IconShare />
          </a>
        </p>
      ),
    },
  ];

  // Use topHolders state if available, otherwise fall back to dataSource
  const tableData = topHolders.map((item, index) => ({ ...item, key: index }));

  return (
    <TopHolderTableStyled style={{ ...style }}>
      <Table<ITopHolder>
        className={styles.customTable}
        columns={columns}
        // rowClassName={(record) => {
        //   return record?.rank === 1 ? "active" : "";
        // }}
        loading={isLoading}
        dataSource={tableData}
        pagination={{ position: ["none", "bottomCenter"] }}
        size="middle"
        scroll={{ x: "max-content", y: 55 * 10 }}
      />
    </TopHolderTableStyled>
  );
};
