/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0D1B2A",
          light: "#13253A",
        },
        ink: "#1B263B",
        muted: "#5B6777",
        panel: "#F4F6F8",
        line: "#E6E9EE",
        accent: "#2A4B7C",
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        card: "0 16px 40px rgba(13,27,42,.10)",
        cta: "0 22px 50px rgba(13,27,42,.20)",
      },
    },
  },
  plugins: [],
};
