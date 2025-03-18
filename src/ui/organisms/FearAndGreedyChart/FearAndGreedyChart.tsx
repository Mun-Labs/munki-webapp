import styled from "styled-components";

const getColorFromValue = (value: number) => {
  const clampedValue = Math.min(Math.max(value, 0), 180);
  if (clampedValue <= 30) {
    return `rgb(238 28 132)`;
  } else if (clampedValue <= 55) {
    return `rgb(243 90 123)`;
  } else if (clampedValue <= 75) {
    return `rgb(253 211 104)`;
  } else if (clampedValue <= 90) {
    return `rgb(254 236 102)`;
  } else if (clampedValue <= 110) {
    return `rgb(180 239 61)`;
  } else {
    return `rgb(84 242 9)`;
  }
};

interface IFearAndGreedChart {
  value: number;
  isShowNumber?: boolean;
}

const FearAndGreedyChart = ({
  value,
  isShowNumber = true,
}: IFearAndGreedChart) => {
  return (
    <ContainerStyled>
      <img src="/fear-greedy-chart.png" width={275} height={150} />
      <CircleStyled isShowNumber={isShowNumber} degree={value}>
        <div className={isShowNumber ? "line withNumber" : "line"}>
          {isShowNumber && <p className="number">{value}</p>}
        </div>
      </CircleStyled>
    </ContainerStyled>
  );
};

export default FearAndGreedyChart;

const ContainerStyled = styled.div.attrs({ className: "ContainerStyled" })`
  position: relative;
  width: auto;
  height: 150px;
  margin: auto;
  display: flex;
  justify-content: center;
`;

interface CircleProps {
  degree: number;
  isShowNumber?: boolean;
}

const CircleStyled = styled.div.attrs<CircleProps>({
  className: "CircleStyled",
})`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%) rotate(${(props) => props?.degree || 0}deg);
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #a7a7a7;

  .line {
    position: absolute;
    z-index: -1;
    transform: translateY(-50%);
    top: 50%;
    right: 10px;
    width: 110px;
    height: 12px;
    box-shadow: 1px 1px 10px #000;
    background: rgb(167, 167, 167);
    background: -moz-linear-gradient(
      266deg,
      rgba(167, 167, 167, 1) 0%,
      ${(props) => getColorFromValue(props.degree || 0)} 100%
    );
    background: -webkit-linear-gradient(
      266deg,
      rgba(167, 167, 167, 1) 0%,
      ${(props) => getColorFromValue(props.degree || 0)} 100%
    );
    background: linear-gradient(
      266deg,
      rgba(167, 167, 167, 1) 0%,
      ${(props) => getColorFromValue(props.degree || 0)} 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#a7a7a7",endColorstr="#ee1b84",GradientType=1);

    .number {
      position: absolute;
      z-index: 4;
      left: -55%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(-90deg);
      text-shadow: 1px 1px 8px #000;
    }
  }

  .line.withNumber {
    &::after {
      content: "";
      position: absolute;
      z-index: 2;
      left: -55%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 44px;
      height: 44px;
      border-radius: 50%;
      background-color: ${(props) => getColorFromValue(props?.degree) || 0};
    }
  }

  &::after {
    content: "";
    position: absolute;
    z-index: 2;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #a7a7a7;
  }
`;
