// Chip
import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { UI_COLORS } from "../../colors";

const ChipStyled = styled.div.attrs({
  className: "ChipStyled",
})`
  padding: 4px 38px;
  border-radius: 24px;
  background: ${UI_COLORS.reversePrimaryBackround};
  color: ${UI_COLORS.reversePrimaryText};
`;

interface IChipProps extends ComponentProps<any> {
  value: string;
  presets?: "white";
}

export const Chip: FC<IChipProps> = (props) => {
  const { style, value } = props;
  return (
    <>
      <ChipStyled style={{ ...style }}>{value}</ChipStyled>
    </>
  );
};
