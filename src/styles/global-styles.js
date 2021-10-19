import { createTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        '&:hover': {
          backgroundColor: colors.lightGrey,
          color: colors.black,
        },
        backgroundColor: colors.lightGrey,
        color: colors.darkGrey,
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: colors.lightRed,
        },
        backgroundColor: colors.darkRed,
        color: colors.white,
      },
      root: {
        fontWeight: 'bold',
        textTransform: 'capitalize',
      },
    },
    MuiIconButton: {
      colorPrimary: {
        '&:hover': {
          color: colors.darkGrey,
        },
        color: colors.darkGrey,
      },
      colorSecondary: {
        '&:hover': {
          backgroundColor: colors.lightGrey,
          color: colors.black,
        },
        backgroundColor: colors.lightGrey,
        color: colors.darkGrey,
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '8px',
      },
    },
    MuiTypography: {
      root: {
        color: colors.darkGrey,
      },
    },
  },
  palette: {
    primary: {
      dark: colors.darkGrey,
      light: colors.lightGrey,
      main: colors.white,
    },
    secondary: {
      dark: colors.brown,
      light: colors.white,
      main: colors.darkRed,
    },
  },
});

export default theme;
