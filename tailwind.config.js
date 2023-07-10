/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      oxygen: ["Oxygen", "sans-serif"],
    },
    extend: {
      height: {
        "90v": "90vh",
        "10v": "10vh",
      },
      boxShadow: {
        d1: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        d2: " rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
      },
      backgroundImage: {
        hero: "url('https://c4.wallpaperflare.com/wallpaper/221/515/747/anime-welcome-to-the-n-h-k-wallpaper-preview.jpg')",
      },
    },
  },
  plugins: [],
};
