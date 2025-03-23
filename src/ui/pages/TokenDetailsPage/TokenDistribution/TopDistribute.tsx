import styled from "styled-components";

const DISTRIBUTE = [
  {
    color: "#A9FF80",
    title: "TOP 10",
    disable: false,
  },
  {
    color: "#FBE892",
    title: "11-30",
    disable: true,
  },
  {
    color: "#EE1B84",
    title: "31-50",
    disable: true,
  },
  {
    color: "#2c3741",
    title: "THE REST",
    disable: true,
  },
];

const TopDistribute = () => {
  return (
    <TopDistributeStyled>
      {DISTRIBUTE.map((item) => (
        <div className={`${item.disable ? "disable" : ""}`}>
          <p style={{ background: item.color }} className="circle" />
          <p>{item.title}</p>
        </div>
      ))}
    </TopDistributeStyled>
  );
};

export default TopDistribute;

const TopDistributeStyled = styled.div.attrs({
  className: "TopDistributeStyled",
})`
  margin-top: 24px;
  display: inline-block;
  padding: 2px 8px;
  width: auto;
  border-radius: 24px;
  border: 1px solid #695a61;
  .disable {
    opacity: 0.4;
  }
  & > div {
    margin: 0 8px;
    font-size: 18px;
    display: inline-block;
    font-family: sans-serif;
    font-weight: bold;

    p {
      display: inline-block;
      font-family: sans-serif;
    }

    .circle {
      width: 12px;
      height: 12px;
      background-color: red;
      display: inline-block;
      border-radius: 50%;
      margin-right: 4px;
    }
  }
`;
