import { ThemeConfig } from "antd";
import { COLORS } from "./colors";

type RecursiveStyles = {
  [key: string]: React.CSSProperties | RecursiveStyles;
};

export const Styles: RecursiveStyles = {
  borders: {
    border: `1px solid ${COLORS.white}`,
  },
  h1: {
    fontWeight: 800,
    fontSize: "30px",
  },
  h2: {
    fontWeight: 800,
    fontSize: "26.5px",
  },
  h3: {
    fontWeight: 800,
    fontSize: 17.3,
  },
};

export const debugStyles: React.CSSProperties = {
  ...Styles.borders,
};

export const darkTheme: ThemeConfig = {
  token: {
    // Seed Token
    colorText: COLORS.white,
    colorTextSecondary: COLORS.grey70,
    colorBgBase: COLORS.black10,
    colorPrimary: "#00b96b",
    borderRadius: 2,

    // Alias Token
    colorBgContainer: COLORS.black,

  },
  components: {
    Segmented: {
      itemSelectedBg: COLORS.rose,
      fontSize: Styles.h3.fontSize as number,
      fontWeightStrong: Styles.h3.fontWeight as number,
      borderRadiusSM: 4,
    },
    Table: {
      headerBg: COLORS.white25,
      borderColor: COLORS.grey70,
      colorIcon: COLORS.white,
      colorBorder: COLORS.grey70,
      headerSortActiveBg: COLORS.white25,
      headerSplitColor: COLORS.grey70,
    },
  },
};
