import { COLORS } from "../../colors";
import { Styles } from "../../uiStyles";
import { HorizontalFilter } from "./HorizontalFilter";

export const HorizontalFilterDemo = () => {
  return (
    <>
      <HorizontalFilter
        label="Hot list 🔥"
        labelStyles={{ ...Styles.h2, color: COLORS.grey70 }}
        segmentedStyles={{
          ...Styles.h3,
          border: `1px solid ${COLORS.yellow30}`,
          borderRadius: 6,
        }}
        options={["Trending", "Gainers", "Losers", "Recents"]}
        defaultWidth={900}
      />
      <HorizontalFilter
        label="Hot list 🔥"
        labelStyles={{ ...Styles.h2, color: COLORS.grey70 }}
        segmentedStyles={{
          ...Styles.h3,
          border: `1px solid ${COLORS.yellow30}`,
          borderRadius: 6,
        }}
        options={["Trending", "Gainers", "Losers", "Recents"]}
      />
    </>
  );
};
