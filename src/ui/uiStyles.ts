import { ThemeConfig } from "antd";
import { COLORS } from "./colors";

type RecursiveStyles = {
  [key: string]: React.CSSProperties | RecursiveStyles;
};

export const Styles: RecursiveStyles = {
  centerVertically: {
    display: "flex",
    alignItems: "center",
  },
  centerHorizontally: {
    display: "flex",
    justifyContent: "center",
  },
  backgroundImage: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  },
  borders: {
    border: `1px solid ${COLORS.white}`,
  },
  h1: {
    fontWeight: 900,
    fontSize: "30px",
  },
  h2: {
    fontWeight: 900,
    fontSize: "26.5px",
  },
  h3: {
    fontWeight: 900,
    fontSize: "17.3px",
  },
  h4: {
    fontWeight: 600,
    fontSize: "16px",
  },
  textSm: {
    fontSize: "14px",
  },
  textShadowRedBlue: {
    textShadow: "1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue",
  },
  fontSansSerif: {
    fontFamily: "Arial, Helvetica, sans-serif"
  },
  ellipsis: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
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
    colorBorder: COLORS.grey50,
    colorBorderSecondary: COLORS.grey50,

    // Alias Token
    colorBgContainer: COLORS.black,
    fontFamily: "GROBOLD, sans serif",
  },
  components: {
    Button: {
      defaultActiveColor: COLORS.white,
      defaultHoverColor: COLORS.white,
      defaultHoverBg: 'red', // does not work. leaving it here for further investigation
    },
    Card: {
      borderRadiusLG: 8,
    },
    Input: {
      hoverBg: COLORS.white25,
      // hoverBg: "red",
    },
    Segmented: {
      itemSelectedBg: COLORS.magenta,
      fontSize: Styles.h3.fontSize as number,
      fontWeightStrong: Styles.h3.fontWeight as number,
      borderRadiusSM: 4,
    },
    Table: {
      headerBg: COLORS.white25,
      borderColor: COLORS.black,
      colorIcon: COLORS.white,
      colorBorder: COLORS.grey70,
      headerSortActiveBg: COLORS.white25,
      headerSplitColor: COLORS.grey70,
    },
  },
};
