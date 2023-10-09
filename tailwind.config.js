import { config } from "@lebernardo/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: config.theme.colors,
      fontFamily: config.theme.fonts,
      spacing: config.theme.space,
      fontWeight: config.theme.fontWeights,
      fontSize: config.theme.fontSizes,
    },
  },
  plugins: [],
}
