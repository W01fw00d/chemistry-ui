import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ className, description, height, src, width }) => {
  const useStyles = makeStyles({
    img: {
      height: 'auto',
      width: '100%',
    },
  });
  const classes = useStyles();

  return (
    <img
      alt={`${description}.`}
      className={`${classes.img} ${className}`}
      height={height}
      loading="lazy"
      src={src}
      title={description}
      width={width}
    />
  );
};

Component.defaultProps = {
  className: '',
  description: 'Image without description',
};

Component.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Component;
