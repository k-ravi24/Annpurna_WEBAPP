/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "portrait-mobile": {
          raw: "(max-width: 640px) and (orientation: portrait)",
        }, // Portrait mode for mobile
        "landscape-mobile": {
          raw: "(max-width: 640px) and (orientation: landscape)",
        }, // Landscape mode for mobile
        tab: "768px", // Tablet size
        "small-laptop": "1024px", // Small laptop
        "mid-laptop": "1280px", // Mid-sized laptop
        laptop: "1440px", // Standard laptop
        desktop: "1920px", // Desktop
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
