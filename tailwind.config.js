/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable toggle via ThemeContext
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1200px",
      },
    },
    extend: {
      colors: {
        // DARK THEME
        dark: {
          background: "#0f172a",    // Deep Slate
          surface: "#1e293b",       // Lighter Slate
          primary: "#8b5cf6",       // Electric Violet
          secondary: "#06b6d4",     // Neon Cyan
          accent: "#ec4899",        // Hot Pink
          textPrimary: "#f8fafc",   // Off-White
          textSecondary: "#94a3b8", // Cool Gray
          borderLight: "#334155",   // Slate Border
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
        // LIGHT THEME
        light: {
          background: "#f8fafc",    // Light gray
          surface: "#ffffff",       // White cards
          primary: "#8b5cf6",       // Same accent
          secondary: "#06b6d4",
          accent: "#ec4899",
          textPrimary: "#0f172a",   // Dark text
          textSecondary: "#475569", // Gray text
          borderLight: "#e2e8f0",   // Light border
          success: "#10b981",
          warning: "#f59e0b",
          error: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(0,0,0,0.5)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15)",
        glow: "0 0 15px rgba(139, 92, 246, 0.5)", // Primary Glow
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "conic-gradient(from 180deg at 50% 50%, #8b5cf6 0deg, #06b6d4 180deg, #ec4899 360deg)",
      },
      animation: {
        fade: "fadeIn 0.5s ease-in-out",
        slideUp: "slideUp 0.6s ease-out",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
