import styled from "styled-components";
import TotalHoldersChart from "./TopHoldersChart";
import { COLORS } from "../../../colors";
import { FilterByTime } from "../../../molecules/FilterByTime/FilterByTime";

const HOLDER_INFO = [
  {
    title: "Holders",
    value: 12123,
  },
  {
    title: "Holders > $10",
    value: "4237 (21.94%)",
    active: true,
  },
  {
    title: "Market Cap",
    value: "$451.96M",
  },
  ,
  {
    title: "Market Cap/ Holders",
    value: "$101.58",
  },
  {
    title: "Market Cap/ Holders > $10",
    value: "$463.01",
  },
];

const TotalHolders = () => {
  return (
    <TotalHolderStyled>
      <div className="header">
        <h3>Top Holders</h3>
        <FilterByTime />
      </div>
      <div className="wrap-chart">
        <TotalHoldersChart />
      </div>

      <div className="more-info">
        {HOLDER_INFO.map((item) => (
          <div key={item?.title} className="item">
            <div className="left">
              <p className="txt">{item?.title}</p>
            </div>
            <div className="right">
              <p className={`txt ${item?.active ? "active" : ""}`}>
                {item?.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </TotalHolderStyled>
  );
};

export default TotalHolders;

const TotalHolderStyled = styled.div.attrs({
  className: "TotalHolderStyled",
})`
  padding: 0 24px 24px;
  border-left: 1px solid ${COLORS.magenta};
  .txt {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .wrap-chart {
    background-color: #141619;
    border: 1px solid ${COLORS.magenta};
    border-radius: 12px;
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

  @media (max-width: 600px) {
    .header {
      flex-direction: column;
    }
  }
`;
