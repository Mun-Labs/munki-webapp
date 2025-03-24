import { ComponentProps, FC } from "react";
import styled from "styled-components";
import React from "react";
import { Avatar, Flex, Table } from "antd";
import type { TableColumnsType } from "antd";
import { createStyles } from "antd-style";
import { IToken } from "../../../domain/entities/Entities";
import { MOCK_DATA_ALPHA_MOVES, MockTokens } from "../../../api/MockData";
import { COLORS } from "../../colors";
import { UITokenWhale } from "../../atoms/UITokenWhale/UITokenWhale";
import { AntDesignOutlined } from "@ant-design/icons";
import useSmallScreen from "../../../hooks/useSmallScreen";
import { MunkiBadge } from "../../atoms/MunkiBadge/MunkiBadge";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { AlphaMovesItem } from "../../../api/apiTypes";
import { Currency } from "../../atoms/Currency/Currency";
import { AvatarWithText } from "../../molecules/AvatarWithText/AvatarWithText";
import { DateTime } from "luxon";
import { Styles } from "../../uiStyles";
import { useAlphaMovesApi } from "../../../api/hooks/useAlphaMovesApi";
import { calculatePercentHold } from "../../../domain/businessLogic/percentHold";

const MemeCoinTableStyled = styled.div.attrs({
  className: "MemeCoinTableStyled",
})`
  /* this one prepare for add class that rowitem has new data */
  .active.ant-table-row-level-0 {
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
  }

  border-top: 1px solid ${COLORS.white60};
  .head {
    display: block;
    color: ${COLORS.white60};
    font-family: sans-serif;
    font-size: 18px;
    font-weight: 500;
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

  .ant-table-header {
    th.ant-table-cell {
      padding-bottom: 0 !important;
      padding-top: 10px !important;
      --ant-table-header-split-color: ${COLORS.black} !important;
      --ant-table-header-color: ${COLORS.white} !important;
      background-color: ${COLORS.black};
      font-family: sans-serif;
      line-height: auto;
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
    tr {
      td:first-child {
      }
      td.ant-table-cell-fix-left-last {
        border-right: 1px solid ${COLORS.white60};
      }
      td:nth-child(2) {
        padding-left: 15px !important;
      }
    }
  }
`;

interface MemeCoinTableProps extends ComponentProps<any> {}

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

interface DataType extends AlphaMovesItem {
  key: React.Key;
}

// const dataSource: DataType[] = MockTokens.map((token) => ({

export const MemeCoinTable: FC<MemeCoinTableProps> = (props) => {
  const { style } = props;
  const { styles } = useStyle();
  const isSmallScreen = useSmallScreen(1265);

  const { data } = useAlphaMovesApi({}, MOCK_DATA_ALPHA_MOVES);
  if (!data) return null;

  const dataSource: DataType[] = data.response.map((token) => ({
    ...token,
    key: token.time,
  }));

  // console.log({ dataSource });
  // console.log({ MockTokens });
  // console.log({ styles });

  const columns: TableColumnsType<DataType> = [
    {
      title: (
        <div
          className="head"
          style={{ textAlign: "left", color: COLORS.white }}
        >
          Buyers
        </div>
      ),
      width: 170,
      dataIndex: "name",
      key: "name",
      fixed: isSmallScreen ? undefined : "left",
      render: (_, record) => {
        const asNum = Number(record.amount);
        return (
          <AvatarWithText
            name={
              <span style={{ color: COLORS.white }}>{record.coinName}</span>
            }
            symbol={
              <Currency
                value={asNum}
                showColors
                colors={[undefined, COLORS.magenta]}
                prefixes={["Bought", "Sold"]}
                actionType={record.actionType}
              />
            }
            shape="square"
          />
        );
      },
    },
    {
      title: <div className="head">Alpha</div>,
      width: 80,
      dataIndex: "alphaGroup",
      key: "alphaGroup",
      fixed: isSmallScreen ? undefined : "left",
      render: (value: AlphaMovesItem["alphaGroup"]) => {
        const mapping: Record<AlphaMovesItem["alphaGroup"], string> = {
          WHALE: "🐳",
          KOL: "🌟",
          SMART: "🧠",
        };
        return <div className="head">{mapping[value]}</div>;
      },
    },
    {
      title: <div className="head">Times</div>,
      width: 120,
      dataIndex: "time",
      key: "time",
      fixed: isSmallScreen ? undefined : "left",
      render: (_value) => {
        const timeAgo = DateTime.fromMillis(_value * 1000).toRelative();
        return <div className="head">{timeAgo}</div>;
      },
    },
    {
      title: <div className="head">%hold</div>,
      dataIndex: "hold",
      key: "hold",
      width: 80,
      fixed: isSmallScreen ? undefined : "left",
      render: (_, record) => (
        <Percentage
          value={calculatePercentHold(
            Number(record.amount),
            Number(record.totalSupply),
          )}
          className="head"
          style={{ color: "#C5BC95", justifyContent: "center" }}
          noSigns
        />
      ),
    },
    {
      title: (
        <div
          className="head"
          style={{ textAlign: "left", color: COLORS.white }}
        >
          Token
        </div>
      ),
      dataIndex: "token",
      key: "token",
      width: 200,
      fixed: isSmallScreen ? undefined : "left",
      render: (_, record) => {
        const asNum = Number(record.amount);
        return (
          <AvatarWithText
            logoUrl={record.tokenLogo ?? "/user4.png"}
            name={
              <span style={{ color: COLORS.white }}>{record.tokenSymbol}</span>
            }
            symbol={
              <Flex style={{ ...Styles.fontSansSerif, color: COLORS.white60 }}>
                @ MC
                <Currency
                  value={asNum}
                  actionType={record.actionType}
                  style={{ marginLeft: 6 }}
                />
              </Flex>
            }
            shape="square"
          />
        );
      },
    },
    {
      title: (
        <div
          className="head"
          style={{ fontFamily: "GROBOLD", fontWeight: 600, fontSize: "20px" }}
        >
          Mun score
        </div>
      ),
      dataIndex: "munScore",
      key: "munScore",
      width: 120,
      render: (_, record) => (
        <div
          className="cl-mun-score"
          style={{ fontSize: "24px", textAlign: "center" }}
        >
          {record.token.munScore}
        </div>
      ),
    },
    {
      title: (
        <div
          className="head"
          style={{ fontFamily: "GROBOLD", fontSize: "20px" }}
        >
          Risk score
        </div>
      ),
      dataIndex: "riskScore",
      key: "riskScore",
      width: 120,
      render: (_, record) => (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Percentage
            style={{ fontSize: "20px" }}
            noSigns
            value={record.token.riskScore}
          ></Percentage>
        </div>
      ),
    },
    {
      title: (
        <div className="head" style={{ textAlign: "left" }}>
          # of smarts wallet in top holder
        </div>
      ),
      dataIndex: "top_smart_wallets_holders",
      key: "top_smart_wallets_holders",
      width: 180,
      render: (_, record) => (
        <MunkiBadge>{record.token.topSmartWalletsHolders}/50</MunkiBadge>
      ),
    },
    {
      title: (
        <div className="head" style={{ textAlign: "left" }}>
          # of fresh wallets in top holers
        </div>
      ),
      dataIndex: "top_fresh_wallet_holders",
      key: "top_fresh_wallet_holders",
      width: 180,
      render: (_, record) => (
        <MunkiBadge color={COLORS.yellow30}>
          {record.token.topFreshWalletHolders}/50
        </MunkiBadge>
      ),
    },
    {
      title: <div className="head">Smart followers</div>,
      dataIndex: "smart_followers",
      key: "smart_followers",
      width: 150,
      render: (_, record) => (
        <div className="content">{record.token.smartFollowers}</div>
      ),
    },
    {
      title: <div className="head">Followers</div>,
      dataIndex: "avgImpressions",
      key: "avgImpressions",
      width: 150,
      render: (_value) => <div className="content">52k</div>,
    },
    {
      title: <div className="head">Top.Followers</div>,
      dataIndex: "avgImpressions",
      key: "avgImpressions",
      width: 150,
      render: (_value) => (
        <Avatar.Group>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
          <a href="https://ant.design">
            <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
          </a>
          <Avatar
            style={{ backgroundColor: "#1677ff" }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
      ),
    },
    {
      title: <div className="head">Volume</div>,
      dataIndex: "avgImpressions",
      key: "avgImpressions",
      width: 150,
      render: (_value) => <div className="content">52k</div>,
    },
    {
      title: <div className="head">Price</div>,
      dataIndex: "price",
      key: "price",
      width: 120,
      render: (_value) => {
        return <div className="content">52k</div>;
      },
    },
    {
      title: <div className="head">M.Cap</div>,
      dataIndex: "price7D",
      key: "price7D",
      width: 120,
      render: (_value) => <div className="content">52k</div>,
    },
    {
      title: <div className="head">△%24hrs</div>,
      dataIndex: "price7D",
      key: "price7D",
      width: 120,
      render: (_value) => <div className="content">52k</div>,
    },
    {
      title: <div className="head">Holders</div>,
      dataIndex: "price7D",
      key: "price7D",
      width: 120,
      render: (_value) => <div className="content">52k</div>,
    },
  ];

  return (
    <MemeCoinTableStyled style={{ ...style }}>
      <Table<DataType>
        className={styles.customTable}
        columns={columns}
        rowClassName={(record) => {
          return record?.tokenAddress === "0x6e6c3659" ? "active" : "";
        }}
        dataSource={dataSource}
        pagination={{ position: ["none", "bottomCenter"] }}
        size="middle"
        scroll={{ x: "max-content", y: 55 * 10 }}
      />
    </MemeCoinTableStyled>
  );
};
