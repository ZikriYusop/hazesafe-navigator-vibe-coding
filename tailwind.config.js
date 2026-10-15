/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F6F4A",
        accent: "#8CC9A8",
        surface: "#F5F7F6",
        muted: "#6B7B73",
        ink: "#23302B",
        line: "#E2E8E4",
        haze: {
          low: "#3FA66A",
          moderate: "#E4C24A",
          high: "#E08A3C",
          unhealthy: "#C0483C",
        },
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      maxWidth: {
        app: "480px",
      },
    },
  },
  plugins: [],
};