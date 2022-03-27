module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  theme: {
    container: {
      center: true,
    },
    // minHeight: {
    //   '1/2': '50%',
    // },
  },
  daisyui: {
    themes: [
      {
        garden: {
          ...require('daisyui/src/colors/themes')['[data-theme=garden]'],
          secondary: '#619929',
          'secondary-focus': '#3e621a',
          accent: '#b185de',
          'accent-focus': '#8d4dcf',
        },
      },
      'dark',
    ],
  },
}
