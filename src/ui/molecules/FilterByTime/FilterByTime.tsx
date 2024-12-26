import { ComponentProps, FC } from "react";
import {
  HorizontalFilter,
  HorizontalFilterProps,
} from "../HorizontalFilter/HorizontalFilter";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";
import { TimeService } from "../../../common/modules/TimeService";

interface FilterByTimeProps extends ComponentProps<any> {
  label?: string;
  labelStyles?: HorizontalFilterProps["labelStyles"];
}

export const FilterByTime: FC<FilterByTimeProps> = ({
  style,
  label,
  labelStyles,
}) => {
  return (
    <Flex justify="end" style={{ ...style }}>
      <HorizontalFilter
        label={label ?? "= Filter By"}
        labelStyles={{ color: COLORS.grey70, ...labelStyles }}
        segmentedStyles={{ ...Styles.textSm }}
        options={[1440, 720, 360, 60, 5, 1].map(
          TimeService.minutesToTimeString,
        )}
      />
    </Flex>
  );
};
//options={[1440, 720, 360, 60, 5, 1].map(
//  TimeService.minutesToTimeString,
//)}
