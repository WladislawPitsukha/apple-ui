import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'sans-serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'navbar-color': 'rgba(22, 22, 23, 0.8)',
        'custom-white': 'rgba(245, 245, 247, 1)',
        'custom-blue': 'rgba(41, 151, 255, 1)', 
        'custom-gray': 'rgba(110, 110, 115, 1)',
        'custom-orange': 'rgba(245, 99, 0, 1)',
        'light-white': 'rgb(255 247 247 / 85%)',
        'light-blue': 'rgba(0, 102, 204, 1)',
        'custom-dark': 'rgba(29, 29, 31, 1)',
        'custom-dark-gray': 'rgba(66, 66, 69, 1)',
        'custom-light-gray': 'rgba(245, 245, 247, 1)',
        'custom-red': 'rgba(238, 0, 0, 1)', 
        'custom-dark-white': 'rgba(210, 210, 215, 1)',
        'custom-light-brown': 'rgba(136, 136, 136, 1)',
        'custom-light-gray-card': 'rgba(250, 250, 250, 1)',
        'custom-green': 'rgba(0, 255, 0, 1)',
        'cus-light-white': 'rgba(251, 251, 253, 1)'
      },
      letterSpacing: {
        'custom-1': '-0.28px',
        'custom-2': '0.112px',
        'custom-3': '0.231px',
        'tight-custom': '-0.12px',
      },
      textDecorationThickness: {
        'no-underline': 'none'
      }
    },
  },
  plugins: [],
};
export default config;