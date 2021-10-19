import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../styles/global-styles';
import Header from '../organisms/[recipe]/detail/header.jsx';
import Typography from '../atoms/typography.jsx';

const Component = ({ literals }) => {
  const useStyles = makeStyles({
    notFound: {
      color: theme.palette.primary.dark,
      fontWeight: 'bold',
      marginTop: '15px',
      textAlign: 'center',
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header name={literals.goHome} />
      <Typography className={classes.notFound} variant="h6">
        {literals.notFound}
      </Typography>
    </ThemeProvider>
  );
};

Component.defaultProps = {
  literals: {},
};

Component.propTypes = {
  literals: PropTypes.shape({
    goHome: Header.propTypes.name,
    notFound: PropTypes.string,
  }),
};

export default Component;
