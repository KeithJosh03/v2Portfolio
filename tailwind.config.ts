import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        PrimaryCol:"#E2E8F0",
        SecondaryCol:'#5EEAD4',
        ThirdCol:'#93A4B7'
      },
      backgroundColor:{
        headerBG: "#141B30",
        borderStyle: "#141B30",
        avatarBG: '#141B30',
        stackBG:'#122B39',
        alterBG: '#101828',
        stacksBG: '#0E111E'
      }
    },
  },
  plugins: [],
};
export default config;
