/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        logoLight: "url('/assets/logoLight.png')",
        logoDark: "url('/assets/logoDark.png')",
      },

      colors: {
        sectionLeft: "rgba(63, 55, 42, 1)",
        sectionRight: " rgba(246, 238, 219, 1)",
      },
    },
  },
  plugins: [],
};
