import { ComponentProps, FC, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import React from "react";
import { useNavigate } from "react-router";
import { Button, Flex, Table } from "antd";
import type { TableColumnsType, TablePaginationConfig } from "antd";
import { createStyles } from "antd-style";
import { MOCK_DATA_ALPHA_MOVES } from "../../../api/MockData";
import { COL_DS, COLORS } from "../../colors";
import useSmallScreen from "../../../hooks/useSmallScreen";
import { MunkiBadge } from "../../atoms/MunkiBadge/MunkiBadge";
import { Percentage } from "../../atoms/Percentage/Percentage";
import { AlphaMovesItem, PaginationQueryParams } from "../../../api/apiTypes";
import { Currency } from "../../atoms/Currency/Currency";
import { AvatarWithText } from "../../molecules/AvatarWithText/AvatarWithText";
import { DateTime } from "luxon";
import { Styles } from "../../uiStyles";
import { useAlphaMovesApi } from "../../../api/hooks/useAlphaMovesApi";
import { calculatePercentHold } from "../../../domain/businessLogic/percentHold";
import { MunkiSkeleton } from "../../atoms/MunkiSkeleton/MunkiSkeleton";
import { kolMappingByWallet } from "../../../domain/businessLogic/kolMapping";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

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

  /* Add alternating row styles for better readability */
  .ant-table-tbody {
    tr.ant-table-row:nth-child(odd) {
      td.ant-table-cell {
        background-color: ${COLORS.black};
      }
    }
    tr.ant-table-row:nth-child(even) {
      td.ant-table-cell {
        background-color: #1f1f1f; /* Slightly lighter than black for contrast */
      }
    }

    /* Preserve hover styles */
    tr.ant-table-row:hover > td.ant-table-cell {
      background-color: ${COL_DS.card900} !important; /* Even lighter for hover state */
    }

    /* Make sure active row style takes precedence */
    tr.active.ant-table-row-level-0 {
      td.ant-table-cell {
        background-color: #000;
        animation: rowActive 3s infinite;
      }
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

  /* Scroll button styles */
  .table-scroll-button {
    position: absolute;
    transform: translateY(-50%);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 62px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0.7);
    border: 1px solid ${COLORS.white60};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: ${COLORS.black14};
    }

    &.left-button {
      left: 50%;
    }

    &.right-button {
      right: 0;
    }

    &.hidden {
      display: none;
    }
  }

  /* Ensure table container has position relative for absolute positioning of buttons */
  .ant-table-wrapper {
    position: relative;
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

export const MemeCoinTable: FC<MemeCoinTableProps> = (props) => {
  const { style } = props;
  const { styles } = useStyle();
  const isSmallScreen = useSmallScreen(1265);
  const navigate = useNavigate();
  const tableRef = useRef<HTMLDivElement>(null);

  // Scroll state
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Add pagination state
  const [tableParams, setTableParams] = useState<{
    pagination: TablePaginationConfig;
  }>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: 0,
    },
  });

  // Convert antd pagination params to API pagination params
  const paginationParams: PaginationQueryParams = {
    limit: tableParams.pagination.pageSize,
    offset:
      ((tableParams.pagination.current || 1) - 1) *
      (tableParams.pagination.pageSize || 10),
  };

  // Use the pagination params in the API call
  let { data, isLoading } = useAlphaMovesApi(
    paginationParams,
    MOCK_DATA_ALPHA_MOVES,
  );

  // Update pagination total when data is received
  useEffect(() => {
    if (data && data.total !== undefined) {
      setTableParams({
        ...tableParams,
        pagination: {
          ...tableParams.pagination,
          total: data.total,
        },
      });
    }
  }, [data]);

  // Handle pagination changes
  const handleTableChange = (pagination: TablePaginationConfig) => {
    // Clear data if page size changes
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      // No need to explicitly clear data as it will be refetched due to pagination change
      // Just note that old data might not be relevant when pageSize changes
    }

    setTableParams({
      pagination,
    });
  };

  // Function to handle row click navigation
  const handleRowClick = (record: DataType) => {
    const address = record.token?.tokenAddress;
    if (address) {
      navigate(`/token/${address}`);
    }
  };

  // Function to handle horizontal scroll
  const handleScroll = () => {
    if (!tableRef.current) return;

    const tableBody = tableRef.current.querySelector(".ant-table-body");
    if (!tableBody) return;

    const { scrollLeft, scrollWidth, clientWidth } =
      tableBody as HTMLDivElement;

    // Check if can scroll left or right
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  // Function to scroll table horizontally
  const scrollTable = (direction: "left" | "right") => {
    if (!tableRef.current) return;

    const tableBody = tableRef.current.querySelector(".ant-table-body");
    if (!tableBody) return;

    const scrollAmount = 300; // Pixels to scroll
    const currentScroll = (tableBody as HTMLDivElement).scrollLeft;

    (tableBody as HTMLDivElement).scrollLeft =
      direction === "left"
        ? currentScroll - scrollAmount
        : currentScroll + scrollAmount;
  };

  // Add event listener for scroll
  useEffect(() => {
    const tableBody = tableRef.current?.querySelector(".ant-table-body");
    if (!tableBody) return;

    tableBody.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      tableBody.removeEventListener("scroll", handleScroll);
    };
  }, [data]); // Re-run when data changes

  if (!data)
    return (
      <div style={{ width: 1400, height: 600 }}>
        <MunkiSkeleton />
      </div>
    );

  const dataSource: DataType[] = data.response.map((token) => ({
    ...token,
    key: token?.time,
  }));

  const columns: TableColumnsType<DataType> = [
    {
      title: (
        <div className="head" style={{ color: COLORS.white }}>
          Buyers
        </div>
      ),
      width: 170,
      dataIndex: "name",
      key: "name",
      fixed: isSmallScreen ? undefined : "left",
      render: (_, record) => {
        const asNum = Number(record.amount);
        const mappedWallet = kolMappingByWallet[record.walletAddress];
        return (
          <AvatarWithText
            name={
              <div style={{ color: COLORS.white, maxWidth: 114 }}>
                {mappedWallet.name}
              </div>
            }
            logoUrl={`/${mappedWallet.name}.jpeg`}
            symbol={
              <Currency
                value={asNum}
                showColors
                colors={[undefined, COLORS.magenta]}
                prefixes={["Bought", "Sold"]}
                actionType={record.actionType}
                currency={false}
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
      title: <div className="head">Time</div>,
      width: 160,
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
          value={
            calculatePercentHold(
              Number(record.amount),
              Number(record.totalSupply),
            ) / 100
          }
          className="head"
          style={{ color: "#C5BC95", display: "flex", justifyContent: "right" }}
          noSigns
        />
      ),
    },
    {
      title: (
        <div className="head" style={{ color: COLORS.white }}>
          Token
        </div>
      ),
      dataIndex: "token",
      key: "token",
      width: 200,
      fixed: isSmallScreen ? undefined : "left",
      render: (_, record) => {
        const asNum = Number(record.token.marketcap);
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
            tooltip={record.coinName}
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
          {record.token?.munScore || "n/a"}
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
            value={record.token?.riskScore}
          ></Percentage>
        </div>
      ),
    },
    {
      title: (
        <div className="head" style={{ textAlign: "left" }}>
          # of smarts wallet in top holders
        </div>
      ),
      dataIndex: "top_smart_wallets_holders",
      key: "top_smart_wallets_holders",
      width: 180,
      render: (_, record) => (
        <MunkiBadge>{record.token?.topSmartWalletsHolders}/50</MunkiBadge>
      ),
    },
    {
      title: (
        <div className="head" style={{ textAlign: "left" }}>
          # of fresh wallets in top holders
        </div>
      ),
      dataIndex: "top_fresh_wallet_holders",
      key: "top_fresh_wallet_holders",
      width: 180,
      render: (_, record) => (
        <MunkiBadge color={COLORS.yellow30}>
          <span style={{ color: COL_DS.baseBlack }}>
            {record.token?.topFreshWalletHolders}/50
          </span>
        </MunkiBadge>
      ),
    },
    {
      title: <div className="head">Smart followers</div>,
      dataIndex: "smart_followers",
      key: "smart_followers",
      width: 150,
      render: (_, record) => (
        <div className="content">{record.token?.smartFollowers}</div>
      ),
    },
    // {
    //   title: <div className="head">Followers</div>,
    //   dataIndex: "avgImpressions",
    //   key: "avgImpressions",
    //   width: 150,
    //   render: (_value) => <div className="content">52k</div>,
    // },
    // {
    //   title: <div className="head">Top.Followers</div>,
    //   dataIndex: "avgImpressions",
    //   key: "avgImpressions",
    //   width: 150,
    //   render: (_value) => (
    //     <Avatar.Group>
    //       <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
    //       <a href="https://ant.design">
    //         <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
    //       </a>
    //       <Avatar
    //         style={{ backgroundColor: "#1677ff" }}
    //         icon={<AntDesignOutlined />}
    //       />
    //     </Avatar.Group>
    //   ),
    // },
    {
      title: <div className="head">Volume</div>,
      dataIndex: "avgImpressions",
      key: "avgImpressions",
      width: 150,
      render: (_, record) => (
        <div className="content">
          <Currency
            currency
            value={Number(record.token.volume24h)}
            fontFamily="sans-serif"
          />
        </div>
      ),
    },
    {
      title: <div className="head">Price</div>,
      dataIndex: "price",
      key: "price",
      width: 120,
      render: (_, record) => (
        <div className="content">
          <Currency
            currency
            value={Number(record.token.history24hPrice)}
            showRawValue
            fixed={10}
            fontFamily="sans-serif"
          />
        </div>
      ),
    },
    {
      title: <div className="head">M.Cap</div>,
      dataIndex: "price7D",
      key: "price7D",
      width: 120,
      render: (_, record) => (
        <div className="content">
          <Currency
            currency
            value={Number(record.token.marketcap)}
            fontFamily="sans-serif"
          />
        </div>
      ),
    },
    {
      title: <div className="head">△%24hrs</div>,
      dataIndex: "price7D",
      key: "price7D",
      width: 120,
      render: (_, record) => (
        <div className="content">
          <Currency
            currency
            value={Number(record.token.history24hPrice)}
            fontFamily="sans-serif"
          />
        </div>
      ),
    },
    {
      title: <div className="head">Holders</div>,
      dataIndex: "price7D",
      key: "price7D",
      width: 120,
      render: (_, record) => (
        <div className="content">{record.token.holders}</div>
      ),
    },
  ];

  return (
    <MemeCoinTableStyled style={{ ...style, height: 850 }}>
      <div ref={tableRef} style={{ position: "relative" }}>
        <Button
          className={`table-scroll-button left-button ${
            !canScrollLeft ? "hidden" : ""
          }`}
          icon={<LeftOutlined />}
          onClick={() => scrollTable("left")}
          type="text"
        />

        <Button
          className={`table-scroll-button right-button ${
            !canScrollRight ? "hidden" : ""
          }`}
          icon={<RightOutlined />}
          onClick={() => scrollTable("right")}
          type="text"
        />

        <Table<DataType>
          className={styles.customTable}
          columns={columns}
          dataSource={dataSource}
          pagination={{ position: ["bottomCenter"], ...tableParams.pagination }}
          onChange={(pagination) => handleTableChange(pagination)}
          loading={isLoading}
          size="middle"
          scroll={{ x: "max-content", y: 150 * 10 }}
          onRow={(record) => ({
            onClick: () => handleRowClick(record),
            style: { cursor: "pointer" },
          })}
        />
      </div>
    </MemeCoinTableStyled>
  );
};
