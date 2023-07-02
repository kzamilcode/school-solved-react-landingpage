/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-white": "#ffffff",
        parimary: "#96BB7C",
      },
    },
  },
  plugins: [],
};
