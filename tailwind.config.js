/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryP: "hsl(259, 100%, 65%)",
        primaryR: "hsl(0, 100%, 67%)",
        neutral900: "hsl(0, 0%, 8%)",
        neutral700: "hsl(0, 1%, 44%)",
        neutral400: "hsl(0, 0%, 86%)",
        neutral200: "hsl(0, 0%, 94%)",
        neutral100: "hsl(0, 0%, 100%)",
      },
      borderRadius: {
        custom: "1.5rem 1.5rem 5rem 1.5rem",
        customMD: "1.5rem 1.5rem 10rem 1.5rem",
      },
      screens: {
        xs: "530px",
      }
    },
  },
  plugins: [],
}

