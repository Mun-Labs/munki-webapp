import styled from "styled-components";
import { COLORS } from "../../../colors";

const DATA = [
  {
    type: "🫧",
    weight: 3,
    percent: 18,
    limit: "$0 - $10",
    value: 4234,
  },
  {
    type: "🦐",
    weight: 7,
    percent: 35,
    limit: "$10 - $100",
    value: 7998,
  },
  {
    type: "🐟",
    weight: 6,
    percent: 31,
    limit: "$100 - $1k",
    value: 7008,
  },
  {
    type: "🐬",
    weight: 2,
    percent: 13,
    limit: "$1k - $10k",
    value: 2900,
  },
  {
    type: "🦈",
    weight: 1,
    percent: 3,
    limit: "$10k - $100k",
    value: 678,
  },
  {
    type: "🐋",
    weight: 1,
    percent: 1,
    limit: "> $100k",
    value: 121,
  },
];

const InfoDistribute = () => {
  return (
    <InfoDistributeStyled>
      {DATA.map((item) => (
        <div className="item">
          <div className="type">{item.type}</div>
          <div className="weight wrap-rectangle">
            {Array(item.weight)
              .fill("")
              .map((_item, idx) => (
                <div
                  key={idx}
                  className="rectangle"
                  style={{ marginLeft: 2 }}
                ></div>
              ))}
          </div>
          <div className="percent cl-gray" style={{ marginLeft: 20 }}>
            {item.percent}%
          </div>
          <div className="limit cl-gray" style={{ marginLeft: 40, width: 150 }}>
            {item.limit}
          </div>
          <div className="value cl-green" style={{ marginLeft: 50 }}>
            {item.value}
          </div>
        </div>
      ))}
    </InfoDistributeStyled>
  );
};

export default InfoDistribute;

const InfoDistributeStyled = styled.div.attrs({
  className: "InfoDistributeStyled",
})`
  margin-top: 24px;

  * {
    font-size: 20px;
  }

  .item {
    display: grid;
    grid-template-columns: 1.5rem 10.75rem 3.125rem 9.125rem 4.375rem;

    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
  }

  .cl-gray {
    color: ${COLORS.grey50};
  }

  .cl-green {
    color: #6bdf61;
  }

  div {
    font-family: sans-serif;
    font-weight: bold;
  }

  .wrap-rectangle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1px;
  }

  .rectangle {
    max-width: 22px;
    width: 100%;
    height: 22px;
    background-color: #6bdf61;
  }

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .item > * {
      width: 100%;
    }
  }

  @media (max-width: 600px) {
    .item {
      grid-template-columns: 1.5rem 5.75rem 2.125rem 6.125rem 2.375rem;
    }
  }
`;
