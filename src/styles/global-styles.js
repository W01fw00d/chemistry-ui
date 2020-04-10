import { createMuiTheme } from '@material-ui/core/styles';
import colors from './colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.lightGrey,
      main: colors.white,
      dark: colors.darkGrey,
    },
    secondary: {
      light: colors.white,
      main: colors.darkRed,
      dark: colors.brown,
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: colors.darkGrey,
      },
    },
    MuiButton: {
      root: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
      containedPrimary: {
        color: colors.darkGrey,
        backgroundColor: colors.lightGrey,
        '&:hover': {
          color: colors.black,
          backgroundColor: colors.lightGrey,
        },
      },
      containedSecondary: {
        color: colors.white,
        backgroundColor: colors.darkRed,
        '&:hover': {
          backgroundColor: colors.lightRed,
        },
      },
    },
    MuiIconButton: {
      colorPrimary: {
        color: colors.darkGrey,
        '&:hover': {
          color: colors.darkGrey,
        },
      },
      colorSecondary: {
        color: colors.darkGrey,
        backgroundColor: colors.lightGrey,
        '&:hover': {
          color: colors.black,
          backgroundColor: colors.lightGrey,
        },
      },
    },
    MuiOutlinedInput: {
      input: {
        padding: '8px',
      },
    },
  },
});

export default theme;
