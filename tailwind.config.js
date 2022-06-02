module.exports = {
  mode : "jit", 
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: { 
        // Could set custom colors like : 
        // primary : "#000"
      }
    },
  },
  plugins: [],
}