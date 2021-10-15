// https://raw.githubusercontent.com/tailwindlabs/tailwindcss/master/stubs/defaultConfig.stub.js

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
  },

  purge: {
    layers: ['utilities'],
  },

  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '0.5rem',
        lg: '0.5rem',
        lg: '0.5rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: "#333333",
      white: "#fff",
      red: '#FF3200',

      gray: {
        100: '#858080',
        200: '#BBB7B7',
        300: '#E4DFDF',
        400: '#F5F5F5',
        500: 'rgba(170, 170, 170, 0.5)',
        600: '#0B153A',
        700: '#636363'
      },
      blue: {
        100: "#1A2448",
        200: "#0B153A"
      },

      primary: {
        accent: '#FF732B',
        'accent-button': '#FF6F00',
        gray: '#3B3B3B',
        light: '#EFF7FF',
        textBody: '#0B153A',
        100: 'rgb(252, 141, 85)'
      },

      secondary: {
        'darken-1': '#2B2A2A',
        'darken-2': '#222121',
        accent: '#EB6600',
      },
    },
    spacing: {
      px: "1px",
      0: "0",
      1: "calc(1/16 * 1rem)",
      4: "calc(4/16 * 1rem)",
      6: "calc(6/16 * 1rem)",
      8: "calc(8/16 * 1rem)",
      10: "calc(10/16 * 1rem)",
      12: "calc(12/16 * 1rem)",
      14: "calc(14/16 * 1rem)",
      16: "1rem",
      20: "calc(20/16 * 1rem)",
      24: "calc(24/16 * 1rem)",
      28: "calc(28/16 * 1rem)",
      30: "calc(30/16 * 1rem)",
      32: "calc(32/16 * 1rem)",
      36: "calc(36/16 * 1rem)",
      40: "calc(40/16 * 1rem)",
      44: "calc(44/16 * 1rem)",
      48: "calc(48/16 * 1rem)",
      50: "calc(50/16 * 1rem)",
      52: "calc(52/16 * 1rem)",
      54: "calc(54/16 * 1rem)",
      56: "calc(56/16 * 1rem)",
      60: "calc(60/16 * 1rem)",
      64: "calc(64/16 * 1rem)",
      72: "calc(72/16 * 1rem)",
      76: "calc(76/16 * 1rem)",
      80: "calc(80/16 * 1rem)",
      85: "calc(85/16 * 1rem)",
      90: "calc(90/16 * 1rem)",
      96: "calc(96/16 * 1rem)",
      112: "calc(112/16 * 1rem)",
      120: "calc(120/16 * 1rem)",
      128: "calc(128/16 * 1rem)",
      132: "calc(132/16 * 1rem)",
      136: "calc(136/16 * 1rem)",
      141: "calc(141/16 * 1rem)",
      150: "calc(150/16 * 1rem)",
      160: "calc(160/16 * 1rem)",
      170: "calc(170/16 * 1rem)",
      200: "calc(200/16 * 1rem)",
      240: "calc(240/16 * 1rem)",
      260: "calc(260/16 * 1rem)",
      280: "calc(280/16 * 1rem)",

      300: "calc(300/16 * 1rem)",
      315: "calc(315/16 * 1rem)",
      520: "calc(520/16 * 1rem)",
      600: "calc(600/16 * 1rem)",
      700: "calc(700/16 * 1rem)",
      max: "max-content"
    },
    borderRadius: {
      none: '0px',
      full: '9999px',
      10: 'calc(10/16 * 1rem)',
      30: 'calc(30/16 * 1rem)',
    },
    fontSize: {
      96: 'calc(96/16 * 1rem)',
      88: 'calc(88/16 * 1rem)',
      72: 'calc(72/16 * 1rem)',
      64: 'calc(64/16 * 1rem)',
      60: 'calc(60/16 * 1rem)',
      56: 'calc(56/16 * 1rem)',
      50: 'calc(50/16 * 1rem)',

      48: 'calc(48/16 * 1rem)',
      44: 'calc(44/16 * 1rem)',
      40: 'calc(40/16 * 1rem)',
      38: 'calc(38/16 * 1rem)',
      36: 'calc(36/16 * 1rem)',
      30: 'calc(30/16 * 1rem)',
      32: 'calc(32/16 * 1rem)',
      30: 'calc(30/16 * 1rem)',
      28: 'calc(28/16 * 1rem)',
      24: 'calc(24/16 * 1rem)',
      20: 'calc(20/16 * 1rem)',
      18: 'calc(18/16 * 1rem)',
      16: 'calc(16/16 * 1rem)',
      14: 'calc(14/16 * 1rem)',
      13: 'calc(13/16 * 1rem)',
      12: 'calc(12/16 * 1rem)',
    },
    fontWeight: {
      hairline: "100",
      thin: "200",
      light: "300",
      then: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },

    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      9: '9',
      16: '16',
    },

    inset: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "3/20": "15%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/12": "8.333333%",
      full: "100%",
      "150": "150%",
      "-1/2": "-50%",
      "-1/3": "-33.333333%",
      "-2/3": "-66.666667%",
      "-1/4": "-25%",
      "-2/4": "-50%",
      "-3/4": "-75%",
      "-full": "-100%",
      "-150": "-150%",
    }),

    maxHeight: (theme) => ({
      ...theme('spacing'),
      700: '700px',
      full: '100%',
      screen: '100vh',
    }),

    extend: {
      animation: {
        'spin-slow': 'spin 0.1s linear infinite',
      },
      fontFamily: {
        display: ['Cambria', 'sans-serif'],
        sans: [
          'Averta',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      height: {
        app: 'calc(var(--h-app) - var(--h-header))',
        '5/6': 'calc(5 / 6 * 100%)',
      },
      rotate: {
        '-135': '-135deg',
      },
      transitionProperty: {
        'max-h': 'max-height',
      },
      translate: {
        '-2/3': '-66.666667%',
      },
      zIndex: {
        '-10': '-10',
        '-20': '-20',
        1000: '1000',
        1100: '1100',
      },
      boxShadow: {
        base: "0px 4px 50px rgba(0, 0, 0, 0.15);",
        10: "0px 4px 20px rgba(0, 0, 0, 0.1);",
        20: "0px 4px 50px rgba(0, 0, 0, 0.2);",
        radio: "0 0 0 1px #878787",
        active: "0 0 0 1px #06569E"
      },
      opacity: {
        7: '0.07',
        40: '0.4',
        80: '0.8',
        90: '0.9',
      },
    },
  },

  variants: {
    translate: ['responsive'],
    aspectRatio: ['responsive', 'hover'],
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textColor: ['checked'],
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/aspect-ratio'),
  ],
}
