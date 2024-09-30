import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white)",
        whiteGray: "var(--white-gray)",
        blackGray: "var(--black-gray)",
        lightBlack: "var(--light-black)",
        black: "var(--black)",
        yellow: "var(--yellow)",

        selectedColor: "var(--selected-color)",
        btnShadow: "var(--btn-shadow)",
        btn: "var(--btn)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        londrina: ['Londrina Solid', 'sans-serif'],
        island: ['Island Moments', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
