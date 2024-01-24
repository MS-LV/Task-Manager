/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/App.vue', './src/**/*'],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto'
      }, 
      colors: {
        darkTheme: '',
        darkColor: ''
      }
    },
  },
  plugins: [],
}

