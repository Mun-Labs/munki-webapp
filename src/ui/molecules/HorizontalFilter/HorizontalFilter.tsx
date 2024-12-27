import { ComponentProps, FC, useMemo } from "react";
import { Flex, Segmented, SegmentedProps } from "antd";
import styled from "styled-components";
import { COLORS } from "../../colors";

export interface HorizontalFilterProps extends ComponentProps<any> {
  label: string;
  labelStyles?: React.CSSProperties;
  segmentedStyles?: React.CSSProperties;
  isTwoRow?: boolean;
}

const HorizontalFilterStyled = styled.div.attrs({
  className: "HorizontalFilterStyled",
})`
  height: 54px;
  display: flex;
  align-items: center;
`;

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

export const HorizontalFilter: FC<HorizontalFilterProps & SegmentedProps> = ({
  style,
  label,
  labelStyles,
  segmentedStyles,
  options,
  isTwoRow,
}) => {
  const twoRowStyles = useMemo((): React.CSSProperties => {
    return {
      flexDirection: isTwoRow ? "column" : "row",
      alignItems: isTwoRow ? "flex-start" : "center",
    };
  }, [isTwoRow]);

  return (
    <HorizontalFilterStyled style={{ ...style }}>
      <Flex justify="end" align="center" style={{ ...twoRowStyles }}>
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
      </Flex>
    </HorizontalFilterStyled>
  );
};
