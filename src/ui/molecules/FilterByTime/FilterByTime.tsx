import { ComponentProps, FC } from "react";
import {
  HorizontalFilter,
  HorizontalFilterProps,
} from "../HorizontalFilter/HorizontalFilter";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";

interface FilterByTimeProps extends ComponentProps<any> {
  label?: string;
  labelStyles?: HorizontalFilterProps["labelStyles"];
}

export const FilterByTime: FC<FilterByTimeProps> = ({ label, labelStyles }) => {
  return (
    <Flex justify="end">
      <HorizontalFilter
        style={{ width: 400 }}
        label={label ?? "= Filter By"}
        labelStyles={{ color: COLORS.grey70, ...labelStyles }}
        segmentedStyles={{ ...Styles.h3 }}
        options={[1440, 720, 360, 60, 5, 1]}
      />
    </Flex>
  );
};
