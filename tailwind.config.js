/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(50%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        entring:{
          "0%" :{
            transform: "translateX(-100%)",
            opacity: "0",
          },
          "100%" :{
            transform: "translateX(0)",
            opacity: "1",
          }
        },
        sunrise:{
          "0%" :{
            transform: "translateY(-100%)",
            // opacity: "0",
          },
          "100%" :{
            transform: "translateY(0)",
          }
        }
      },
      animation: {
        bouncing: "bounce 1s linear infinite",
        entring: "entring 1s",
        sunrise: "sunrise 3s"
      },
      blur:{
        xs : '3px'
      },
      height: {
        menu: 'calc(100dvh - 59px)',
    },
    },
  },
  plugins: [],
};

