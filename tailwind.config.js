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
    fontFamily: {
      proximanova: ['proxima_nova'],
      circularspotifyhead: ['circular_spotify_head'],
      circularspotifytext: ['circular_spotify_text']
    },
    fontWeight: {
      light: '300',
      book: '350',
      normal: '400',
      bold: '700'
    },
    extend: {
      colors: {
        brand: '#CD9A03',
        secondary: '#0C1618',
        teclagrey: {
          50: '#807A7A',
          100: '#363535'
        },
        teclagreen: {
          100: '#00C498'
        },
        teclalight: {
          50: '#FFFCF9',
          100: '#F0F5F9',
          200: '#F0F8F5'
        },
      },
      backgroundImage: (theme) => ({
        main: 'url("../static/imgs/bg-main.jpg")',
      }),
    },
  },
  plugins: [],
}
