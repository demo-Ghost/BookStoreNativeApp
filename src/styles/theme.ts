import { extendTheme } from "native-base";
import { colors } from "./colors";

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      100: colors.primary.base,
      200: colors.primary.base,
      300: colors.primary.base,
      400: colors.primary.base,
      500: colors.primary.base,
      600: colors.primary.base,
      700: colors.primary.base,
      800: colors.primary.base,
      900: colors.primary.base,
    },
  },
});
