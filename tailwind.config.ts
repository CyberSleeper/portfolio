import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
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
        light: {
          background: "#33353C",
          primary: "#BBBCBD",
          secondary: "#A9997A",
          section: "#1B161B"
        },
        dark: {
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
