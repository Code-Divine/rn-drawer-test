import { Appearance } from "react-native";
const colorScheme = Appearance.getColorScheme();

const PRIMARY = {
  lighter: "#e0f7fa",
  light: "#b2ebf2",
  main: "#00BCD4",
  dark: "#00ACC1",
  darker: "#0097A7",
  contrastText: "#fff",
};
const SECONDARY = {
  lighter: "#cfd8dc",
  light: "#78909c",
  main: "#607d8b",
  dark: "#546e7a",
  darker: "#455a64",
};
const INFO = {
  lighter: "#e1f5fe",
  light: "#b3e5fc",
  main: "#03A9F4",
  dark: "#039BE5",
  darker: "#1976D2",
};
const SUCCESS = {
  lighter: "#f1f8e9",
  light: "#dcedc8",
  main: "#8BC34A",
  dark: "#7cb342",
  darker: "#689f38",
};
const WARNING = {
  lighter: "#fff8e1",
  light: "#ffecb3",
  main: "#ffca28",
  dark: "#ffb300",
  darker: "#ffa000",
};
const ERROR = {
  lighter: "#ffebee",
  light: "#ffcdd2",
  main: "#F44336",
  dark: "#E53935",
  darker: "#D32F2F",
};

const PINK = {
  lighter: "#f8bbd0",
  light: "#f48fb1",
  main: "#e91e63",
  dark: "#ec407a",
  darker: "#c2185b",
};

const GREY = {
  0: "#FFFFFF",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#212B36",
  900: "#161C24",
};

// const GRADIENTS = {
//   primary: createGradient(PRIMARY.light, PRIMARY.main),
//   info: createGradient(INFO.light, INFO.main),
//   success: createGradient(SUCCESS.light, SUCCESS.main),
//   warning: createGradient(WARNING.light, WARNING.main),
//   error: createGradient(ERROR.light, ERROR.main),
//   pink: createGradient(PINK.light, PINK.main),
// };

const CHART_COLORS = {
  violet: ["#826AF9", "#9E86FF", "#D0AEFF", "#F7D2FF"],
  blue: ["#2D99FF", "#83CFFF", "#A5F3FF", "#CCFAFF"],
  green: ["#2CD9C5", "#60F1C8", "#A4F7CC", "#C0F2DC"],
  yellow: ["#FFE700", "#FFEF5A", "#FFF7AE", "#FFF3D6"],
  red: ["#FF6C40", "#FF8F6D", "#FFBD98", "#FFF2D4"],
};

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...PRIMARY, contrastText: "#fff" },
  secondary: { ...SECONDARY, contrastText: "#fff" },
  info: { ...INFO, contrastText: "#fff" },
  success: { ...SUCCESS, contrastText: GREY[800] },
  warning: { ...WARNING, contrastText: GREY[800] },
  error: { ...ERROR, contrastText: "#fff" },
  pink: PINK,
  grey: GREY,
  // gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  action: {
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
  shifts: {
    shift: "#00BCD4",
    busy: "#f44336",
    vacation: "#607d8b",
    sick_day: "#8bc34a",
    day_off: "#ff9800",
  },
};

export default ColorPalette =
  colorScheme === "light" || true
    ? {
        ...COMMON,
        mode: "light",
        text: { primary: GREY[800], secondary: GREY[600], disabled: GREY[500] },
        background: {
          paper: "#fff",
          page: "##f8fbfd",
        },
        action: { active: GREY[600], ...COMMON.action },
      }
    : {
        ...COMMON,
        mode: "dark",
        text: { primary: "#fff", secondary: GREY[500], disabled: GREY[600] },
        background: {
          paper: GREY[800],
          page: "#000000",
        },
        action: { active: GREY[500], ...COMMON.action },
      };
