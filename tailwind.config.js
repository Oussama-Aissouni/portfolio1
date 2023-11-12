/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(100%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        bouncing: "bounce 1s linear infinite",
      },
    },
  },
  plugins: [],
};

