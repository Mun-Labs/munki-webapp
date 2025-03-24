import styled from "styled-components";
import { Percentage } from "../../../../../atoms/Percentage/Percentage";

const TopHoldingItem = () => {
  return (
    <TopHoldingItemStyled>
      <p className="img">
        <img src="/user4.png" width={35} height={35} alt="name token" />
      </p>
      <div className="info">
        <p className="tokenName">$FWOG</p>
        <div className="value">
          <p className="vol">$42.54K</p>
          <Percentage
            style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
            value={12}
          />
        </div>
      </div>
    </TopHoldingItemStyled>
  );
};

export default TopHoldingItem;

const TopHoldingItemStyled = styled.div.attrs({
  className: "TopHoldingItemStyled",
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;

  .img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
  }

  .info {
    .tokenName {
      color: #82ebff;
      font-size: 12px;
      font-family: Arial, Helvetica, sans-serif !important;
      font-weight: 600;
    }

    .value {
      gap: 4px;
      font-size: 12px;
      display: flex;
      justify-content: start;
      align-items: center;
      font-weight: 600;

      .vol {
        font-family: Arial, Helvetica, sans-serif !important;
      }
    }
  }
`;
