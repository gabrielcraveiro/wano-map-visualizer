import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.js",
      "./src/**/*.tsx",
      "./src/**/*.ts",
    ],
  },
  prefix: "",
  separator: ":",
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        co: {
          500: "#002432",
        },
        dr: {
          weird: "#f7f6f2",
          darker: "#282a36",
          blackMedium: "#20212b",
          black: "#16171c",
          darkMedium: "#2d3039",
          dark: "#44475a",
          light: "#f8f8f2",
          blue: "#6272a4",
          blueDarker: "#475990",
          cyan: "#8be9fd",
          green: "#50fa7b",
          orange: "#ffb86c",
          pink: "#ff79c6",
          purple: "#bd93f9",
          red: "#ff5555",
          yellow: "#f1fa8c",
          nosferatu: "#282a36",
          aro: "#44475a",
          cullen: "#f8f8f2",
          vonCount: "#6272a4",
          vanHelsing: "#8be9fd",
          blade: "#50fa7b",
          morbius: "#ffb86c",
          buffy: "#ff79c6",
          dracula: "#bd93f9",
          marcelin: "#ff5555",
          lincoln: "#f1fa8c",
        },
        font: {
          text: "#3c4257",
          title: "#1a1f36",
          grey: "#697386",
        },
        body: {
          DEFAULT: "#f4f5f7",
        },
        et: {
          500: "#065af9",
          600: "#1855ca",
        },
        gh: {
          200: "#2b2d31",
          300: "#292a2b",
          400: "#202124",
          500: "#1c1e21",
          600: "#1d1e21",
          700: "#18191b",
          800: "#1a1b1c",
          900: "rgb(21, 23, 25)",
          1000: "#000",
        },
        mt: {
          DEFAULT: "#fff",
          100: "#f7fafc",
          200: "#edf2f7",
          300: "#e2e8f0",
          400: "#cbd5e0",
          500: "#a0aec0",
          600: "#718096",
          700: "#4a5568",
          800: "#2d3748",
          900: "#1a202c",
        },
        eve: {
          400: "#233047",
          500: "#2D5CD1",
          600: "#212223",
          700: "#1a1c1c",
        },
      },
    },
  },
  plugins: [require("windicss/plugin/typography")],
});
