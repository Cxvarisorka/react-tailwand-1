/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        full: "100%",
        hero: "600px",
      },
      screens: {
        tablet: "550px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",

        soul: "1120px",
        // => @media (min-width: 1280px) { ... }

        miniphone: "350px",

        phone: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('../src/images/banner-bg.jpg')",
        "hero-page": "url('../src/images/page-title-bg.jpg')",
        "hero-second": "url('../src/images/page-title-bg-3.jpg')",
        "hero-third": "url('../src/images/page-title-bg-2.jpg')",
      },
      height: {
        100: "25rem",
        200: "30rem",
      },
      width: {
        100: "25rem",
        200: "35rem",
      },
      fontSize: {
        phsm: ["15px", "20px"],
      },
    },
  },
  plugins: [],
};
