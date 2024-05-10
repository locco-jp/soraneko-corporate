/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b42828',
        },
        secondary: {
          DEFAULT: '#aad0dc',
        },
        // 以下の通り追加していく
        // red: { DEFAULT: "" },
        blue: {DEFAULT: '#D5E6EB'},
        green: {DEFAULT: '#6AA4A6'},
        // purple: { DEFAULT: "" },
        navy: {DEFAULT: '#003269'},
        pink: {DEFAULT: '#EFC3C1'},
      },
    },
  },
  plugins: [],
};
