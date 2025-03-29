import styled from "styled-components";
import { COLORS } from "../../../colors";
import TokenDistributeChart from "./TokenDistributeChart";
import TopDistribute from "./TopDistribute";
import InfoDistribute from "./InfoDistribute";

const TokenDistribution = () => {
  return (
    <TokenDistributionStyled>
      <div className="header">
        <h3>Token Distributions</h3>
      </div>

      <TokenDistributeChart />
      <TopDistribute />
      <InfoDistribute />
    </TokenDistributionStyled>
  );
};

export default TokenDistribution;

const TokenDistributionStyled = styled.div.attrs({
  className: "TokenDistributionStyled",
})`
  padding: 12px 24px;
  .txt {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .more-info {
    margin-top: 12px;
    .item {
      .active {
        color: ${COLORS.chlorophyll_green};
      }
      display: flex;
      justify-content: space-between;
      align-items: center;

      .left {
        color: ${COLORS.grey50};
        font-size: 18px;
      }
      .right {
        font-size: 18px;
        width: 140px;
      }
    }
  }

  @media (max-width: 1181px) {
    border-bottom: 1px solid ${COLORS.magenta};
  }
`;
