import { ComponentProps, FC } from "react";
import styled from "styled-components";
import { COLORS } from "../../colors";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";

const PercentageStyled = styled.div.attrs({ className: "PercentageStyled" })``;

interface PercentageProps extends ComponentProps<any> {
  value: number | undefined;
  plusMinus?: boolean;
  neutralColor?: boolean;
}

export const Percentage: FC<PercentageProps> = (props) => {
  const { style, neutralColor, plusMinus, value } = props;
  if (!value) return <>N/A</>;

  let color = value > 0 ? COLORS.green : COLORS.magenta;
  if (neutralColor) {
    color = COLORS.white;
  }

  let icon = value > 0 ? <CaretUpOutlined /> : <CaretDownOutlined />;
  if (plusMinus) {
    icon = value > 0 ? <>+</> : <></>;
  }

  return (
    <PercentageStyled style={{ ...style, color }}>
      {icon}
      {value}%
    </PercentageStyled>
  );
};
