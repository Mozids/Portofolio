/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Background: "#F9FAFB",
        Primary: "#94A3B8 ",
        Secondary: "#CBD5E1  ",
        Tertiary: "#7B8CA1  ",
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
    },
  },
  plugins: [],
};
