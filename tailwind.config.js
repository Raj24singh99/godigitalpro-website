/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ECEC75",
        primaryCard: "#e6e67c",
        dark: "#0f172a",
      },
      fontFamily: {
        serif: ["'Crimson Text'", "serif"],
        sans: ["system-ui", "ui-sans-serif", "Segoe UI", "Arial"],
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: "translateY(8px)" }, to: { opacity: 1, transform: "translateY(0)" } }
      },
      animation: { fadeIn: "fadeIn .5s ease-out both" }
    },
  },
  plugins: [],
}
