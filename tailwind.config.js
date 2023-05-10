/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        keyframes: {
          'fade-in':{
            '0%': {
              opacity: '0%',
            },
            '100%':{
                opacity: '100%',
            }
          },
          'fade-off':{
            '100%': {
              opacity: '100%',
            },
            '0%':{
                opacity: '0%',
            }
          }
        },
        animation: {
          'fade-in': 'fade-in 0.5s',
          'fade-off': 'fade-off 0.5s'
        },
        width: {
          '95':'9rem',
        },
        gradientColorStops: theme => ({
          'yellow': '#FFF7B3',
          'orange': '#FFD465',
          'blue-light': '#85E2FF',
          'blue-light-opacity': '#DBF6FF',
          'white-opacity-30': '#FFFFFF4D',
        }),
        backgroundImage: theme => ({
          'yellow-to-orange': 'linear-gradient(112.21deg, #FFF7B3 21.21%, #FFD465 85.72%)',
          'blue-light-to-opacity': 'linear-gradient(127.96deg, #DBF6FF 25.9%, #85E2FF 82.17%)',
        }),
        colors: {
            primary: {"50":"#EFF6FF","100":"#DBEAFE","200":"#BFDBFE","300":"#93C5FD","400":"#60A5FA","500":"#3B82F6","600":"#2563EB","700":"#1D4ED8","800":"#1E40AF","900":"#1E3A8A"},
            transparente: {"50":"rgba(255, 255, 255, 0) 82.73%)"},
            blue: {
              100: '#85E2FF',
              200: 'rgba(133, 226, 255, 0.51)',
            },
          },
          fontFamily:{
            Soulmaze: ['MADESoulmaze','sans-serif'],
            Cabin:['Cabin','sans-serif'],
          Inter:['Inter','sans-sefif'],
          primary: {"50":"#EFF6FF","100":"#DBEAFE","200":"#BFDBFE","300":"#93C5FD","400":"#60A5FA","500":"#3B82F6","600":"#2563EB","700":"#1D4ED8","800":"#1E40AF","900":"#1E3A8A"},
          transparente: {"50":"rgba(255, 255, 255, 0) 82.73%)"},
          orangeTitle: "#FF8B1F",
          GrayTermsPrivacy: "#6B7280"
        },
      },
      fontFamily: {
        'body': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
      ],
        'sans': [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'system-ui',
      'Segoe UI',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'Noto Sans',
      'sans-serif',
      'Apple Color Emoji',
      'Segoe UI Emoji',
      'Segoe UI Symbol',
      'Noto Color Emoji'
    ]
      },
      screens: {
        'xs':'320px',
        'supersm':'480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px'
      }
    },
    variants: {
      backgroundImage: ['responsive', 'hover'],
    },
    plugins: [
      // require('tailwindcss/plugins/gradients'),
    ],
  }

