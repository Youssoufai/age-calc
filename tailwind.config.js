export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "hsl(259, 100%, 65%)",
        lightred: "hsl(0, 100%, 67%)",
        white: "hsl(0, 0%, 100%)",
        offWhite: "hsl(0, 0%, 94%)",
        lightGrey: "hsl(0, 0%, 86%)",
        smokeyGrey: "hsl(0, 1%, 44%)",
        offBlack: "hsl(0, 0%, 8%)"
      },
      fontFamily: {
        "sans": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}