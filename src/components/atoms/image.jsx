import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ src, width, height, description, className }) => {
  const useStyles = makeStyles({
    img: {
      width: '100%',
      height: 'auto',
    },
  });
  const classes = useStyles();

  return (
    <img
      src={src}
      width={width}
      height={height}
      loading="lazy"
      alt={`${description}.`}
      title={description}
      className={`${classes.img} ${className}`}
    />
  );
};

Component.defaultProps = {
  description: 'Image without description',
  className: '',
};

Component.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};

export default Component;
