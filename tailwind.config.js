module.exports = {
  content: [
    './src/**/*.html',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*/*.php',
    './**/*.php',
    './resources/css/*.css',
    './resources/js/*.js',
    './safelist.txt',
  ],
  theme: {
    screens: {
      xs: '320px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1366px',
      '3xl': '1536px',
    },
    extend: {
      colors: {
        brand: '#CD9A03',
        secondary: '#0C1618',
      },
      backgroundImage: (theme) => ({
        main: 'url("../static/imgs/bg-main.jpg")',
      }),
    },
  },
  plugins: [],
}
