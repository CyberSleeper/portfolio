import type { Config } from "tailwindcss";

export const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: 'Satoshi',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        dark: {
          background: "#33353C",
          primary: "#EAE0D5",
          secondary: "#C6AC8F",
          section: "#22333B",
        },
        light: {
          background: "#DEB596",
          primary: "#484343",
          secondary: "#EFE6DF",
          section: "#325A8D",
        },
        white: "#FDFEFF",
        desertSand: "#DEB596",
        linen: "#EFE6DF",
        lapisLazuli: "#325A8D",
        jet: "#484343",
        walnutBrown: "#5E503F",
        khaki: "#C6AC8F",
        almond: "#EAE0D5",
        gunMetal: "#22333B",
        black: "#0A0908"
      }
    },
  },
  plugins: [],
};
export default config;
