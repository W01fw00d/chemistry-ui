import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../styles/global-styles';
import Header from '../organisms/[recipe]/detail/header.jsx';
import Typography from '../atoms/typography.jsx';

const Component = ({ literals }) => {
  const useStyles = makeStyles({
    notFound: {
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: '15px',
      color: theme.palette.primary.dark,
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Header name={literals.goHome} />
      <Typography variant="h6" className={classes.notFound}>
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
    goHome: PropTypes.string,
    notFound: PropTypes.string,
  }),
};

export default Component;
