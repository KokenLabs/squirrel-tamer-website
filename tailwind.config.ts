import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        acorn: {
          50: "#fdf6ec",
          100: "#f9e8cc",
          200: "#f1cd8f",
          300: "#e8ae57",
          400: "#e0932f",
          500: "#c9761c",
          600: "#a35916",
          700: "#7d4116",
          800: "#5c3016",
          900: "#3e2210",
        },
        forest: {
          50: "#eef6ee",
          100: "#d3e8d4",
          200: "#a8d1ab",
          300: "#78b57d",
          400: "#4f9757",
          500: "#357a3d",
          600: "#286130",
          700: "#204d27",
          800: "#1a3d20",
          900: "#12291566",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
