/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-image": "url('/assets/images/ninjaseo.png')",
        "home-image": "url('/assets/images/home-background.jpg')",
        "abstract-background": "url('/assets/images/abstract-background.jpg')",
      },
    },
  },
  plugins: [],
};
