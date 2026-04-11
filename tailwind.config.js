/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f7f9",
          100: "#e8eef3",
          200: "#cfd9e3",
          300: "#a7b8c9",
          400: "#7a90a6",
          500: "#5a7086",
          600: "#475a6e",
          700: "#3b4a5c",
          800: "#33404f",
          900: "#1e2a3a",
          950: "#121b26",
        },
        fern: {
          500: "#2d6a5c",
          600: "#245548",
          700: "#1c4339",
        },
      },
      fontFamily: {
        /** Source Sans 3: high legibility for body and headings (single family keeps UI simple). */
        display: ['"Source Sans 3"', "system-ui", "sans-serif"],
        sans: ['"Source Sans 3"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgb(30 42 58 / 0.08)",
        card: "0 1px 3px rgb(30 42 58 / 0.06), 0 8px 24px -8px rgb(30 42 58 / 0.08)",
      },
    },
  },
  plugins: [],
};
