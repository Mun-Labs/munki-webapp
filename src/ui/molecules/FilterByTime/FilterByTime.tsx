import { ComponentProps, FC } from "react";
import {
  HorizontalFilter,
  HorizontalFilterProps,
} from "../HorizontalFilter/HorizontalFilter";
import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { Flex } from "antd";
import { TimeService } from "../../../common/modules/TimeService";
import { FilterOutlined } from "@ant-design/icons";

interface FilterByTimeProps extends ComponentProps<any> {
  label?: React.ReactNode;
  labelStyles?: HorizontalFilterProps["labelStyles"];
  isTwoRow?: boolean;
}

export const FilterByTime: FC<FilterByTimeProps> = ({
  style,
  label,
  labelStyles,
  isTwoRow,
}) => {
  return (
    <Flex justify="end" style={{ ...style }}>
      <HorizontalFilter
        label={
          label ?? (
            <div>
              <FilterOutlined style={{ marginRight: 8 }} />
              Filter By
            </div>
          )
        }
        labelStyles={{ color: COLORS.grey70, ...labelStyles }}
        segmentedStyles={{ ...Styles.textSm }}
        options={[1440, 720, 360, 60, 5, 1].map(
          TimeService.minutesToTimeString,
        )}
        isTwoRow={isTwoRow}
      />
    </Flex>
  );
};
//options={[1440, 720, 360, 60, 5, 1].map(
//  TimeService.minutesToTimeString,
//)}
