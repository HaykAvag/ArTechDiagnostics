import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              50: "#FFF1F2",
              100: "#FFE4E6",
              200: "#FECDD3",
              300: "#FDA4AF",
              400: "#FB7185",
              500: "#F43F5E",
              600: "#E11D48",
              700: "#BE123C",
              800: "#881337",
              900: "#4C0519",
              DEFAULT: "#BE123C",
              foreground: "#FFFFFF"
            }
          }
        }
      }
    })
  ]
};
