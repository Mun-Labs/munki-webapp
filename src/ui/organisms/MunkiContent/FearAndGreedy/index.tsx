import { Flex } from "antd";
import styled from "styled-components";
import { COLORS } from "../../../colors";
import { Styles } from "../../../uiStyles";
import FearAndGreedyChart from "../../FearAndGreedyChart";

export const style = {
  paddingFlex: {
    padding: "0 8px 12px",
  },
};

function FearAndGreedWidget() {
  return (
    <div>
      <FlexStyled justify="space-between" align="center" wrap={true}>
        <Flex dir="" justify="start" align="center" gap={"middle"}>
          <p style={{ ...Styles.h2 }}>Memecoin Fear and Greed Index</p>
        </Flex>
      </FlexStyled>
      <IndexStyled>
        <WrapInfoStyled>
          <div>
            <h2>Status:</h2>
            <h1 className="cl-greed" style={{ paddingBottom: "52px" }}>
              Greed
            </h1>
            <FearAndGreedyChart value={90} />
            <p className="desc">
              The index ranges from 0 (Extreme Fear) to 100 (Extreme Greed),
              reflecting crypto market sentiment.
            </p>
            <p className="desc">Last Update: February 28th. 2025.</p>
          </div>
          <div>
            <h2 style={{ marginBottom: "12px" }}>History value</h2>
            <Flex
              style={style.paddingFlex}
              justify="space-between"
              align="center"
            >
              <div>
                <h4>Now:</h4>
                <h3 className="cl-ex-fear">Extremly fear</h3>
              </div>
              <p>10</p>
            </Flex>
            <Flex
              style={style.paddingFlex}
              justify="space-between"
              align="center"
            >
              <div>
                <h4>Yesterday:</h4>
                <h3 className="cl-fear">Fear</h3>
              </div>
              <p>10</p>
            </Flex>
            <Flex
              style={style.paddingFlex}
              justify="space-between"
              align="center"
            >
              <div>
                <h4>Last week:</h4>
                <h3 className="cl-greed">Greed</h3>
              </div>
              <p>10</p>
            </Flex>
            <Flex
              style={style.paddingFlex}
              justify="space-between"
              align="center"
            >
              <div>
                <h4>Last month:</h4>
                <h3 className="cl-ex-greed">Extreme greed</h3>
              </div>
              <p>10</p>
            </Flex>
          </div>
        </WrapInfoStyled>
        <div
          style={{
            marginTop: "14px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "12px",
          }}
        >
          <GroupInfoStyled>
            <p style={{ fontSize: '16px' }}>Solana (SOL)</p>
            <img
              width={22}
              height={22}
              alt="icon-solana"
              src="/public/icon-solana.png"
            />
            <p style={{ fontSize: '18px' }}>$177.52</p>
            <p style={{ color: "#DC4D3B", fontSize: '14px' }}>-0.11% (1d)</p>
          </GroupInfoStyled>

          <GroupInfoStyled>
            <p>24h volume:</p>
            <p>$177.52</p>
            <p className="cl-ex-fear">(LOW)</p>
          </GroupInfoStyled>
        </div>
      </IndexStyled>
    </div>
  );
}

export default FearAndGreedWidget;

const IndexStyled = styled(Flex).attrs({
  className: "IndexStyled",
})`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 30px;
  border-radius: 8px;
  border: 1px solid #907755;
  background: #240415;

  @media (max-width: 910px) {
    /* grid-template-columns: 1fr;/ */
    /* grid-template-rows: 40px; */
    /* padding: 0; */
    gap: 12px;
  }
`;

const GroupInfoStyled = styled(Flex).attrs({
  className: "GroupInfoStyled",
})`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 12px;
  border-radius: 8px;
  gap: 6px;
  border: 1px solid ${COLORS.dark_charcoal};
  background-color: ${COLORS.chinese_black};
  white-space: nowrap;
`;

const WrapInfoStyled = styled(Flex).attrs({
  className: "WrapInfoStyled",
})`
  display: flex;
  justify-content: space-around;
  align-items: start;
  /* border: 1px solid #fff; */
  border-radius: 10px;
  & > div {
    flex: 1;
  }
  h4 {
    font-family: normal, sans-serif;
  }
  h3 {
  }
  .desc {
    font-size: 12px;
    padding-top: 12px;
    padding-bottom: 12px;
  }

  @media (max-width: 710px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;
    & > div {
      flex: 1;
      width: 100%;
      max-width: 400px;
      margin: auto;
    }
  }
`;

const FlexStyled = styled(Flex).attrs({
  className: "FlexStyled",
})`
  display: flex;

  @media (max-width: 767px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const IndexInfoStyled = styled.div.attrs({
  className: "IndexInfoStyled",
})`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .token-name {
    font-size: 20px;
  }

  .volume {
    border: 1px solid gray;
    border-radius: 12px;
    padding: 18px;
    color: ${COLORS.grey50};
    width: 200px;
    text-align: center;
    span {
      color: ${COLORS.white};
    }
  }

  .caret {
    color: ${(props) => props.color};
  }

  .flex-horizontal {
    display: flex;
    justify-content: space-start;
    align-items: center;
    gap: 12px;
  }

  .price-section {
    padding-top: 12px;
    .price {
      font-size: 24px;
    }
  }

  .image {
    border-radius: 100px;
  }
`;
