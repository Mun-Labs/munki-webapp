import { ComponentProps, FC } from "react";
import { Segmented, SegmentedProps } from "antd";
import styled from "styled-components";
import { COLORS } from "../../colors";

export interface HorizontalFilterProps extends ComponentProps<any> {
  label: string;
  labelStyles?: React.CSSProperties;
  segmentedStyles?: React.CSSProperties;
}

const HorizontalFilterStyled = styled.div.attrs({
  className: "HorizontalFilterStyled",
})`
  display: flex;
  height: 54px;
  align-items: center;
`;

export const SegmentedStyled = styled(Segmented).attrs({className: "SegmentedStyled"})`
  height: 100%;
  align-content: center;
  .ant-segmented-item-label {
    height: 44px;
    padding: 7px 14px;
  }
`;

export const HorizontalFilter: FC<HorizontalFilterProps & SegmentedProps> = ({
  style,
  label,
  labelStyles,
  segmentedStyles,
  options,
}) => {
  return (
    <HorizontalFilterStyled style={{ ...style }}>
      <div style={{ ...labelStyles, marginRight: 18 }}>{label}</div>
      <SegmentedStyled<string>
        options={options}
        onChange={(value) => {
          console.log(value); // string
        }}
        style={{
          color: COLORS.grey50,
          ...segmentedStyles,
        }}
      />
    </HorizontalFilterStyled>
  );
};
