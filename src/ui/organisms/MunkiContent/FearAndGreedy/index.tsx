import { CaretDownFilled } from "@ant-design/icons";
import { Image, Flex } from "antd";
import styled from "styled-components";
import { COLORS } from "../../../colors";
import { FilterByTime } from "../../../molecules/FilterByTime/FilterByTime";
import { Styles } from "../../../uiStyles";

function FearAndGreedWidget() {
  return (
    <div>
      <FlexStyled
        justify="space-between"
        align="center"
        wrap={true}
      >
        <Flex justify="start" align="center" gap={'middle'}>
          <p style={{ ...Styles.h2 }}>Meme coin index</p>
        </Flex>
        <FilterByTime style={{ fontSize: 14 }} />
      </FlexStyled>
      <iframe
        src="/public/iframe/fear-and-greedy.html"
        width="100%"
        height="240"
        title="Fear and Greed Widget"
        frameBorder={0}
        style={{
          overflow: 'hidden'
        }}
      ></iframe>
      <IndexInfoStyled color={COLORS.red}>
        <div>
          <div className="flex-horizontal">
            <Image
              preview={false}
              className="image"
              width={44}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
            <p className="token-name">Solana</p>
          </div>
          <div className="flex-horizontal price-section">
            <p className="price">$143.38</p>
            <div className="flex-horizontal">
              <CaretDownFilled className="caret" />
              <p className="caret">2.00% (1d)</p>
            </div>
          </div>
        </div>
        <p className="volume">24H Volume: <span>1.30B</span></p>
      </IndexInfoStyled>
    </div>
  );
}

export default FearAndGreedWidget;


const FlexStyled = styled(Flex).attrs({
  className: 'FlexStyled'
})`
  display: flex;

  @media (max-width:767px) {
    justify-content: center;
    flex-direction: column;
  }
   `


const IndexInfoStyled = styled.div.attrs({
  className: 'IndexInfoStyled'
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
        color: ${COLORS.white}
      }
    }


    .caret {
      color: ${props => props.color}
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
`
