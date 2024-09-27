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
        cadastrar: "rgba(21, 94, 32, 1)",
        botaoLogin: " rgba(174, 196, 130, 1)",
        boxShadowButton: " rgba(143, 160, 108, 1);",
      },

      fontFamily: {
        Beiruti: ["beiruti", "sans serif"],
      },
    },
  },
  plugins: [],
};
