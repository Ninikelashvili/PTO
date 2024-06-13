import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          xs: '375px',
          sm: "576px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1440px",
        },
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      colors: {
        "gray-1": "#A39CB5",
        "gray-2": "#E8E6EC",
        "purple-1": "#9D71FD",
        "purple-2": "#1A0745",
        "purple-3": "#5F517D",
        "purple-4": "#543E81",
        "purple-5": "#F2EFFE"
      },
      maxWidth: {
        'md': '291px',
        '1.5md': '380px',
        'lg': '400px',
        'xl': '737px'
      },
      minWidth: {
        'md': '291px',
      },
      width: {
        'xs': '22px',
        'sm': '86px',
        'lg': '400px',
      },
      minHeight: {
        'md': '280px'
      },
      height: {
        'sm': '86px'
      },
      borderRadius: {
        '2.5xl': '23px'
      }
    },
  },
  plugins: [],
};
export default config;
