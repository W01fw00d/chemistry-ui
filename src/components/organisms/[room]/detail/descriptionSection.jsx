import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../../atoms/typography.jsx';

const Component = ({ className, description, literals }) => {
  const useStyles = makeStyles((theme) => ({
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
      <Typography className={`${classes.layout} ${classes.title}`} color="inherit" variant="h6">
        {literals.description}
      </Typography>
      <Typography className={classes.layout} color="inherit" variant="h6">
        {description}
      </Typography>
    </div>
  );
};

Component.defaultProps = {
  className: '',
  description: '',
  literals: {},
};

Component.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  literals: PropTypes.shape({
    description: PropTypes.string,
  }),
};

export default Component;
