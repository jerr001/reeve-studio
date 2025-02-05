module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        'editor-black': '#000000',
        'editor-dark': '#1a1a1a',
        'editor-gray': '#333333',
      },
      spacing: {
        'timeline': '16rem',
      }
    }
  },
  plugins: [],
}