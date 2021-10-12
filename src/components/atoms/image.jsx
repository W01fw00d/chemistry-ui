import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ src, description, className }) => {
  const useStyles = makeStyles({
    img: {
      width: '100%',
    },
  });
  const classes = useStyles();

  return (
    <img
      src={src}
      alt={`${description}.`}
      title={description}
      className={`${classes.img} ${className}`}
    />
  );
};

Component.defaultProps = {
  src: '',
  description: 'Image without description',
  className: '',
};

Component.propTypes = {
  src: PropTypes.string,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default Component;
