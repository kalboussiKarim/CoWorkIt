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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "nav-bg": "#131315",
        "appwrite-light-pink": "#DB1A5A",
        "appwrite-dark-pink": "#FD366E",
        "content-bg": "#0F0F0F",
        "input-bg": "#18181B",
      },
    },
  },
  plugins: [],
};
