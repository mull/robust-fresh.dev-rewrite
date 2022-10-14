import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  darkMode: "media",
  theme: {
    fontFamily: { sans: ["Roboto"] },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
      indigo: colors.indigo,
      blue: colors.blue,
    },
    extend: {
      fontSize: {
        "6xl": ["4rem", "1.25"],
        "2xl": ["2.5rem", "1.25"],
        xl: ["2rem", "1.25"],
        lg: ["1.75rem", "1.5"],
        md: ["1.5rem", "1.5"],
        sm: ["1.125rem", "1.75rem"],
        // p: ["1.25rem", "1.75rem"],
      },
      colors: {
        black: "#090D14",
        lightBlack: "#090D1433",
        peach: "#FFDBC2",
        lightPeach: "#FFF2EA",
        lightGray: "#090D140D",
        orange: "#E1822F",
        green: "#17811D",
        red: "#BE0000",
        gray: "#4a4a4a",
        yellow: "#fab900",
        lightGreen: "#2ED320",
        lightRed: "#E22121",
      },
      backgroundImage: {
        "rock-wall":
          "linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)),url(/img/bergvagg.jpg)",
      },
    },
  },
} as Options
