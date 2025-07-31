/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        futuristic: {
          black: "#0a0a0a",     // matches --background black
          white: "#ededed",      // matches --foreground off-white
          accent: "#dbe4e4ff",     // neon cyan accent, brighter than your current #dadbdbff
          gray: "#222222",
          lightGray: "#444444",
        },
      },
      fontFamily: {
        futuristic: ["Orbitron", "sans-serif"], // Orbitron without quotes inside array
      },
    },
  },
  plugins: [],
};
