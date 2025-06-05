/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        jet: "var(--color-jet)",
        aqua: "var(--color-aqua)",
        "aqua-20": "var(--color-aqua-20)",
        "aqua-15": "var(--color-aqua-15)",
      },
      backgroundColor: {
        primary: "var(--color-jet)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },
  plugins: [],
};
