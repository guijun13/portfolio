import typographyVariants from './typographyVariants';

const colors = {
  background: {
    light: {
      color: '#F5FEFA',
    },
    main: {
      color: '#F5FEFA',
    },
  },
  // borders: {
  //   main: {
  //     color: '#F1F1F1',
  //   },
  // },
  primary: {
    main: {
      color: '#66D0A1',
      contrastText: '#262A33',
    },
  },
  secondary: {
    main: {
      color: '#526777',
      contrastText: '#F5FEFA',
    },
  },
  modes: {
    dark: {},
  },
};

export default {
  colors,
  typographyVariants,
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  borderRadius: '12px',
  fontFamily: 'Ubuntu',
  transition: '200ms ease-in-out',
};
