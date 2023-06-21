import { pxToRem } from "@/utils/common/styles";

const fontWeight = {
  black: 900,
  extraBold: 800,
  bold: 700,
  semiBold: 600,
  medium: 500,
  regular: 400,
  thin: 300,
};

const theme = {
  color: {
    gray: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    amber: {
      50: "#FFF8E1",
      100: "#FFECB3",
      200: "#FFE082",
      300: "#FFD54F",
      400: "#FFCA28",
      500: "#FFC107",
      600: "#FFB300",
      700: "#FFA000",
      800: "#FF8F00",
      900: "#FF6F00",
    },
    white: "#FFFFFF",
    black: "#000000",
  },
  font: {
    fontWeight,
    pxToRem,
  },
  typography: {
    h1: {
      fontSize: pxToRem(96),
      fontWeight: fontWeight.thin,
    },
    h2: {
      fontSize: pxToRem(60),
      fontWeight: fontWeight.thin,
    },
    h3: {
      fontSize: pxToRem(48),
      fontWeight: fontWeight.regular,
    },
    h4: {
      fontSize: pxToRem(34),
      fontWeight: fontWeight.regular,
    },
    h5: {
      fontSize: pxToRem(24),
      fontWeight: fontWeight.regular,
    },
    h6: {
      fontSize: pxToRem(20),
      fontWeight: fontWeight.medium,
    },
    subtitle1: {
      fontSize: pxToRem(16),
      fontWeight: fontWeight.regular,
    },
    subtitle2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeight.medium,
    },
    body1: {
      fontSize: pxToRem(16),
      fontWeight: fontWeight.regular,
    },
    body2: {
      fontSize: pxToRem(14),
      fontWeight: fontWeight.regular,
    },
    button: {
      fontSize: pxToRem(14),
      fontWeight: fontWeight.medium,
    },
    caption: {
      fontSize: pxToRem(12),
      fontWeight: fontWeight.regular,
    },
    overline: {
      fontSize: pxToRem(10),
      fontWeight: fontWeight.regular,
    },
  },
};

export default theme;
