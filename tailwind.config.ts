import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-navy": "#123c73",
        "brand-blue": "#2f80ed",
        "brand-sky": "#eaf3ff",
        "brand-green": "#8ccb5e",
        ink: "#132238",
        muted: "#5b6878",
        surface: "#f7fafd",
      },
      fontFamily: {
        body: ["Manrope", "sans-serif"],
        heading: ["Sora", "sans-serif"],
      },
    },
  },
};

export default config;
