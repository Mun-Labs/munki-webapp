import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const PercentageStyled = styled.div.attrs({ className: "PercentageStyled" })`
  display: flex;
`;

interface PercentageProps extends ComponentProps<any> {
  value: number | undefined;
  plusMinus?: boolean;
  noSigns?: boolean;
  neutralColor?: boolean;
}

export const Percentage: FC<PercentageProps> = (props) => {
  const { style, neutralColor, plusMinus, noSigns, value } = props;
  if (!value) return <>N/A</>;

  const ensurePercent = value < 1 ? value * 100 : value;

  let color = ensurePercent > 0 ? COLORS.japanese_laurel : COLORS.red;
  if (neutralColor) {
    color = COLORS.white;
  }

  let icon = ensurePercent > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />;
  if (noSigns) {
    icon = <></>;
  } else if (plusMinus) {
    icon = ensurePercent > 0 ? <>+</> : <></>;
  }

  return (
    <PercentageStyled style={{ ...style, color }}>
      {icon}
      {ensurePercent.toFixed()}%
    </PercentageStyled>
  );
};
