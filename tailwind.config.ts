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
        "white": 'var(--white)',
        'light-grey': 'var(--light-grey)',
        'medium-grey': 'var(--medium-grey)',
        'dark-grey': 'var(--dark-grey)',
        "black": 'var(--black)',
        'bg-primary': 'var(--bg-primary)',
        'color-secondary': 'var(--color-secondary)',
        'body-col': 'var(--body-col)',
        "grey": 'var(--grey)',
        'color-accent': 'var(--color-accent)',
        "red": 'var(--red)',
        "orange": 'var(--orange)',
        'navyblue': 'var(--navyblue)',
        "Green": 'var(--Green)',
        "rating": 'var(--rating)',
        'border-color': 'var(--border-color)',
        'grey-lg': 'var(--grey-lg)',
        'box-shadow-color': 'var(--box-shadow-color)',
        
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
