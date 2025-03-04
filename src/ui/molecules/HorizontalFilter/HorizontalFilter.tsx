import { ComponentProps, FC, } from "react";
import { Segmented, SegmentedProps } from "antd";
import styled from "styled-components";
import { COLORS } from "../../colors";

export interface HorizontalFilterProps
  extends ComponentProps<any>,
  Omit<SegmentedProps, "label"> {
  label?: React.ReactNode;
  labelStyles?: React.CSSProperties;
  segmentedStyles?: React.CSSProperties;
  isTwoRow?: boolean;
}

export const SegmentedStyled = styled(Segmented).attrs({
  className: "SegmentedStyled",
})`
  height: 100%;
  align-content: center;
  .ant-segmented-item-label {
    height: 34px;
    padding: 7px;
    display: flex;
    align-items: center;
  }
`;

export const HorizontalFilter: FC<HorizontalFilterProps> = ({
  style,
  label,
  labelStyles,
  segmentedStyles,
  options,
}) => {
  return (
    <HorizontalFilterStyled style={{ ...style }}>
      <HeadHorizontalStyled>
        <div style={{ ...labelStyles }}>{label}</div>
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
      </HeadHorizontalStyled>
    </HorizontalFilterStyled>
  );
};

const HorizontalFilterStyled = styled.div.attrs({
  className: "HorizontalFilterStyled",
})`
  height: 54px;
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 821px) {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;
    flex-flow: row;
    flex-direction: column;
  }
`;

const HeadHorizontalStyled = styled.div.attrs({
  className: "HeadHorizontalStyled",
})`
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  @media (max-width: 821px) {
    flex-direction: column;
    text-align: center;
    flex-flow: row;
    align-items: center;
  }
`;
