import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/public/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px", // => @media (min-width: 480px) { ... }
        sm: "640px", // => @media (min-width: 640px) { ... }
        md: "768px", // => @media (min-width: 768px) { ... }
        lg: "1024px", // => @media (min-width: 1024px) { ... }
        xl: "1280px", // => @media (min-width: 1280px) { ... }
        "2xl": "1536px", // => @media (min-width: 1536px) { ... }
      },
      colors: {
        gray_1: "#C9C9C9",
        gray_2: "#5D5D5D",
        custom_gray: `var(--gray_2, rgba(0, 0, 0, 0.80))`,
        blueSecondary: "#1E90FF",
        bluePrimary: "#000080",
        black: "#000000",
        white: "#FFFFFF",
        blue_coustom: "#17A1FF",
      },

      backgroundImage: {
        blueGradient_dark: "linear-gradient(90deg, #000080 0%, #000080 99.8%)",
        blurGradient_normal: "linear-gradient(90deg, #000080 0%, #1E90FF 100%)",
        button_card_gradient:
          "linear-gradient(90deg, #000080 0%, #17A1FF 100%)",
      },
      boxShadow: {
        custom: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        custom_shaow_card: "0px 4px 10px 0px rgba(0, 0, 0, 0.18)",
        button_card_shadow: "0px 4px 4px 0px #C9C9C9",
        consultation_shadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.18)",
      },
      animation: {
        "infinite-scroll": "infinite-scroll 40s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
