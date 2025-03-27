import styled from "styled-components";

const DISTRIBUTE = [
  {
    color: "#5CC671",
    title: "Top 10",
    percent: 40,
  },
  {
    color: "#FBE892",
    title: "Top 11-30",
    percent: 22,
  },
  {
    color: "#EE1B84",
    title: "Top 31-50",
    percent: 14,
  },
  {
    color: "#2c3741",
    title: "The rest",
    percent: 24,
  },
];

const TokenDistributeChart = () => {
  return (
    <DistributeChartStyled>
      {DISTRIBUTE.map((dist, index) => (
        <div
          key={index}
          style={{ width: `${dist.percent}%`, background: dist.color }}
        ></div>
      ))}
    </DistributeChartStyled>
  );
};

export default TokenDistributeChart;

const DistributeChartStyled = styled.div.attrs({
  className: "DistributeChartStyled",
})`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;

  & > div {
    height: 20px;
  }
`;
