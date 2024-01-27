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
          primary: "#BBBCBD",
          secondary: "#A9997A",
          section: "#1B161B"
        },
        light: {
          background: "#CDC0B2",
          primary: "#3A3739",
          secondary: "#D3AA87",
          section: "#E7E5E8",
        }
      }
    },
  },
  plugins: [],
};
export default config;
