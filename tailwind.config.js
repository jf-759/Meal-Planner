export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Note: Fixed the space after comma
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fill-250': 'repeat(auto-fill, minmax(250px, 1fr))',
      }
    },
  },
  plugins: [],
}