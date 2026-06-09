/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monaSans: ['"Mona Sans"', "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
};
