import React, { useState } from "react";
import styled from "styled-components";
import { COLORS } from "../../../colors";
import { MunkiBadge } from "../../../atoms/MunkiBadge/MunkiBadge";
import { TopHolderTable } from "./TopHolderTable/TopHolderTable";
import { FreshWalletTable } from "../../FreshWalletPage/FreshWalletTable/FreshWalletTable";
import { HoldersTable } from "../../HoldersPage/HoldersTable/HoldersTable";

const TopHolder = () => {
  const [activeTab, setActiveTab] = useState("topHolders");

  return (
    <TopHolderStyled>
      <div className="header" style={{ marginBottom: 32 }}>
        <div
          className={`title ${
            activeTab === "topHolders" ? "active" : "disable"
          }`}
          onClick={() => setActiveTab("topHolders")}
        >
          <h3>Noteworthy Top Holders</h3>
          <div>
            <MunkiBadge>10/50</MunkiBadge>
          </div>
        </div>
        <div
          className={`title ${
            activeTab === "freshWallets" ? "active" : "disable"
          }`}
          onClick={() => setActiveTab("freshWallets")}
        >
          <h3>Fresh Wallet List</h3>
          <div>
            <MunkiBadge>10/50</MunkiBadge>
          </div>
        </div>
        {/* <div
          className={`title ${activeTab === "holders" ? "active" : "disable"}`}
          onClick={() => setActiveTab("holders")}
        >
          <h3>Holders List</h3>
          <div>
            <MunkiBadge>399K</MunkiBadge>
          </div>
        </div> */}
      </div>
      {/* <div className="updated">
        <p className="text">Updated 3h ago</p>
        <div className="badge">
          <p>$gon was created on 06/12/24 2:43 AM</p>
        </div>
      </div> */}
      {activeTab === "topHolders" && <TopHolderTable />}
      {activeTab === "freshWallets" && <FreshWalletTable />}
      {/* {activeTab === "holders" && <HoldersTable />} */}
    </TopHolderStyled>
  );
};

export default TopHolder;

const TopHolderStyled = styled.div.attrs({ className: "TopHolderStyled" })`
  border: 1px solid ${COLORS.magenta};
  padding: 12px;

  .header {
    margin-top: 12px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 12px;
    font-size: 30px;
  }

  .title {
    color: ${COLORS.grey70};
    cursor: pointer;
    display: flex;
    gap: 8px;
    justify-content: flex-start;
    align-items: center;
    transition: opacity 0.2s ease;
  }

  .title.active {
    opacity: 1;
    color: ${COLORS.white};
  }

  .updated {
    border: 1px solid ${COLORS.magenta};
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    margin-top: 24px;
    margin-bottom: 24px;

    .text {
      padding-left: 12px;
    }
    .badge {
      background-color: #242424;
      border-radius: 8px;
      /* padding: 0 4px; */
      padding: 4px 12px;
      margin: 4px;
      color: ${COLORS.magenta};
    }
  }

  @media (max-width: 600px) {
    .header {
      flex-wrap: wrap;
    }
  }

  .disable {
    opacity: 0.4;
  }
`;
