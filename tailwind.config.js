/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: (theme) => ({
        "screen/2": "90vh",
        "screen/3": "80vh",
        "screen/4": "70vh",
        "screen/5": "60vh",
        "screen/6": "50vh",
        "screen/7": "calc(100vh / 3)",
        "screen/8": "calc(100vh / 4)",
        "screen/9": "calc(100vh / 5)",
      }),
      minHeight: (theme) => ({
        "screen/2": "90vh",
        "screen/3": "80vh",
        "screen/4": "70vh",
        "screen/5": "60vh",
        "screen/6": "50vh",
        "screen/7": "calc(100vh / 3)",
        "screen/8": "calc(100vh / 4)",
        "screen/9": "calc(100vh / 5)",
      }),
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FF5722",
        primary: "#00040f",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
    },
  },
  plugins: [],
};
