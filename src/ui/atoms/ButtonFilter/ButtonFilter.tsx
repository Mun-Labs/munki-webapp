import styled from "styled-components";
import { COLORS } from "../../colors";

export const ButtonFilter = ({ children }: React.PropsWithChildren) => {
  return (
    <BtnFillterStyled>
      <img width={24} height={24} alt="filter" src="/icon-filter.png" />{" "}
      {children}{" "}
    </BtnFillterStyled>
  );
};

const BtnFillterStyled = styled.div.attrs({ className: "BtnFillterStyled" })`
  cursor: pointer;
  margin: 8px 0px;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 8px;
  background: gray;
  padding: 10px 14px;
  gap: 12px;
  line-height: normal;
  font-size: 24px;
  background: ${COLORS.raisin_black};
  color: ${COLORS.white60};
`;
