import styled from "styled-components";
import { COLORS } from "../../colors";

interface IProps {
  src: string;
  name: string;
  value: string;
}

export const UITokenWhale = ({ src, name, value }: IProps) => {
  return (
    <TokenWhaleStyled>
      <img width={48} height={48} src={src} className="image" />
      <div className="info">
        <p className="name">{name}</p>
        <p className="value">Bought {value}</p>
      </div>
    </TokenWhaleStyled>
  );
};

const TokenWhaleStyled = styled.div.attrs({ className: "TokenWhaleStyled" })`
  display: flex;
  align-item: center;
  justify-content: start;
  gap: 8px;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: normal;
  }

  .image {
    border: 1px solid white;
    border-radius: 8px;
    object-fit: contain;
  }
  .name {
    font-size: 21px;
    font-weight: bold;
    color: white;
  }
  .value {
    white-space: nowrap;
    font-family: monospace;
    font-size: 16px;
    color: ${COLORS.chlorophyll_green};
  }
`;
