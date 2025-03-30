import { ThemeConfig } from "antd";
import { COLORS, COLORS_DESIGN_SYSTEM } from "./colors";

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
    colorText: COLORS_DESIGN_SYSTEM.text100,
    colorTextSecondary: COLORS_DESIGN_SYSTEM.subtext500,
    colorBgBase: COLORS_DESIGN_SYSTEM.background,
    colorPrimary: COLORS_DESIGN_SYSTEM.primary500,
    borderRadius: 2,
    colorBorder: COLORS_DESIGN_SYSTEM.neutral500,
    colorBorderSecondary: COLORS_DESIGN_SYSTEM.neutral400,
    colorLink: COLORS_DESIGN_SYSTEM.text100,
    colorLinkHover: COLORS_DESIGN_SYSTEM.text500,

    // Alias Token
    colorBgContainer: COLORS_DESIGN_SYSTEM.card,
    fontFamily: "GROBOLD, sans serif",
  },
  components: {
    Button: {
      defaultActiveColor: COLORS_DESIGN_SYSTEM.text100,
      defaultHoverColor: COLORS_DESIGN_SYSTEM.text200,
      defaultHoverBg: COLORS_DESIGN_SYSTEM.primary600,
    },
    Card: {
      borderRadiusLG: 8,
    },
    Input: {
      hoverBg: COLORS_DESIGN_SYSTEM.card800,
    },
    Segmented: {
      itemSelectedBg: COLORS_DESIGN_SYSTEM.secondary500,
      fontSize: Styles.h3.fontSize as number,
      fontWeightStrong: Styles.h3.fontWeight as number,
      borderRadiusSM: 4,
    },
    Table: {
      headerBg: COLORS_DESIGN_SYSTEM.card800,
      borderColor: COLORS_DESIGN_SYSTEM.card,
      colorIcon: COLORS_DESIGN_SYSTEM.text100,
      colorBorder: COLORS_DESIGN_SYSTEM.neutral500,
      headerSortActiveBg: COLORS_DESIGN_SYSTEM.card700,
      headerSplitColor: COLORS_DESIGN_SYSTEM.neutral500,
    },
  },
};
