import { ComponentProps, FC } from "react";
import {
  HorizontalFilter,
  HorizontalFilterProps,
} from "../HorizontalFilter/HorizontalFilter";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";

interface FilterByTimeProps extends ComponentProps<any> {
  label?: string;
  labelStyles?: HorizontalFilterProps["labelStyles"];
}

export const FilterByTime: FC<FilterByTimeProps> = ({ label, labelStyles }) => {
  return (
    <>
      <HorizontalFilter
        label={label ?? "= Filter By"}
        labelStyles={{ color: COLORS.grey70, ...labelStyles }}
        segmentedStyles={{ ...Styles.h3 }}
        options={[1440, 720, 360, 60, 5, 1]}
      />
    </>
  );
};
