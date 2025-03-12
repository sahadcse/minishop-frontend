/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
      },
      animation: {
        slideInFromLeft: "slideInFromLeft 0.8s forwards ease-out",
        slideInFromBottom: "slideInFromBottom 0.8s forwards ease-out",
        fadeIn: "fadeIn 1s forwards ease-out",
        "gentle-zoom": "gentleZoom 8s infinite alternate ease-in-out",
      },
      keyframes: {
        slideInFromLeft: {
          "0%": { transform: "translateX(-30px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInFromBottom: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gentleZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.05)" },
        },
      },
      boxShadow: {
        glow: "0 0 8px 2px rgba(var(--color-primary-rgb), 0.6)",
      },
      transitionDuration: {
        8000: "8000ms",
      },
    },
  },
  plugins: [],
};
