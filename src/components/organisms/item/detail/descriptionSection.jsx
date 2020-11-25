import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../../atoms/typography.jsx';

const Component = ({ className, literals, description }) => {
  const useStyles = makeStyles(theme => ({
    layout: {
      padding: theme.spacing(1),
    },
    title: {
      backgroundColor: theme.palette.primary.light,
      paddingTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <div className={className}>
      <Typography variant="h6" color="inherit" className={`${classes.layout} ${classes.title}`}>
        {literals.description}
      </Typography>
      <Typography variant="h6" color="inherit" className={classes.layout}>
        {description}
      </Typography>
    </div>
  );
};

Component.defaultProps = {
  className: '',
  literals: {},
  description: '',
};

Component.propTypes = {
  className: PropTypes.string,
  literals: PropTypes.shape({
    description: PropTypes.string,
  }),
  description: PropTypes.string,
};

export default Component;
