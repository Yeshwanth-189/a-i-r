// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all React files in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
