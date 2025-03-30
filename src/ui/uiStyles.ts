import { ThemeConfig } from "antd";
import { COLORS, COL_DS } from "./colors";

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
    fontFamily: "Arial, Helvetica, sans-serif",
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
    colorText: COL_DS.text100,
    colorTextSecondary: COL_DS.subtext500,
    colorBgBase: COL_DS.background,
    colorPrimary: COL_DS.primary500,
    borderRadius: 2,
    colorBorder: COL_DS.neutral500,
    colorBorderSecondary: COL_DS.neutral400,
    colorLink: COL_DS.text100,
    colorLinkHover: COL_DS.text500,

    // Alias Token
    colorBgContainer: COL_DS.card,
    fontFamily: "GROBOLD, sans serif",
  },
  components: {
    Button: {
      defaultActiveColor: COL_DS.text100,
      defaultHoverColor: COL_DS.text200,
      defaultHoverBg: COL_DS.primary600,
    },
    Card: {
      borderRadiusLG: 8,
    },
    Input: {
      hoverBg: COL_DS.card800,
    },
    Segmented: {
      itemSelectedBg: COL_DS.secondary500,
      fontSize: Styles.h3.fontSize as number,
      fontWeightStrong: Styles.h3.fontWeight as number,
      borderRadiusSM: 4,
    },
    Skeleton: {
      gradientFromColor: COL_DS.primary600,
      gradientToColor: "rgba(0,0,0,0.35)",
      // colorGradientEnd: "rgba(0,0,0,0.35)",
    },
    Table: {
      headerBg: COL_DS.card800,
      rowHoverBg: COL_DS.card900,
      borderColor: COL_DS.card,
      colorIcon: COL_DS.text100,
      colorBorder: COL_DS.neutral500,
      headerSortActiveBg: COL_DS.card700,
      headerSplitColor: COL_DS.neutral500,
    },
  },
};
