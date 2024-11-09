import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        PrimaryCol:"#E2E8F0",
        SecondaryCol:'#5eead4',
        ThirdCol:'#93A4B7'
      },
      backgroundColor:{
        headerBG: "#15233E",
        avatarBG: '#15233E',
        stackBG:'#122B39',
      }
    },
  },
  plugins: [],
};
export default config;
