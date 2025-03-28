import { MemeCoinTable } from "../../MemeCoinTable/MemeCoinTable";
import styled from "styled-components";
import { ButtonFilter } from "../../../atoms/ButtonFilter/ButtonFilter";

const contentContainerHeight = 653;
const contentHeaderHeight = 82;
const contentHeight = contentContainerHeight - contentHeaderHeight - 2; // - 2 for border

export const AlphaMove = () => {
  return (
    <AlphaMoveStyled>
      <div className="head">
        <div className="title">
          <h3>Alpha Moves</h3>
          <ButtonFilter>
            <p>Buy + Sell</p>
          </ButtonFilter>
          <ButtonFilter>
            <p>Token (30)</p>
          </ButtonFilter>
          <ButtonFilter>
            <p>Aplpha Group (3/3)</p>
          </ButtonFilter>
        </div>
        <div>
          <span>Last</span> 24h
        </div>
      </div>
      <MemeCoinTable style={{ height: contentHeight }} />
    </AlphaMoveStyled>
  );
};

const AlphaMoveStyled = styled.div.attrs({ className: "AlphaMoveStyled" })`
  margin-bottom: 100px;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
  }

  .title {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 18px;

    h3 {
      font-size: 32px;
    }
  }
`;
