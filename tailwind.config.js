/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#E8F7F3",
          100: "#D0EFE7",
          200: "#A2DFD0",
          300: "#74CFB9",
          400: "#46BFA2",
          500: "#16A085",
          600: "#128870",
          700: "#0E6A58",
          800: "#0A4C40",
          900: "#062E28",
        },
        ink: {
          DEFAULT: "#10231F",
          soft: "#3A4A46",
          muted: "#6B7B77",
        },
        canvas: "#F7FAF9",
        emergency: {
          DEFAULT: "#E63946",
          dark: "#C42B38",
          soft: "#FDECEE",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Plus Jakarta Sans", "Inter", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        xl2: "24px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(16,35,31,0.04), 0 4px 16px rgba(16,35,31,0.04)",
        card: "0 2px 4px rgba(16,35,31,0.04), 0 12px 32px rgba(16,35,31,0.06)",
        lift: "0 8px 24px rgba(16,35,31,0.08), 0 24px 48px rgba(16,35,31,0.08)",
        glow: "0 8px 32px rgba(22,160,133,0.24)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.6" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.5s ease-out both",
        float: "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
