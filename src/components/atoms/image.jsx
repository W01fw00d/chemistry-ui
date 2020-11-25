import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ src, alt, className }) => {
  const useStyles = makeStyles({
    img: {
      width: '100%',
    },
  });
  const classes = useStyles();

  return <img src={src} alt={alt} className={`${classes.img} ${className}`} />;
};

Component.defaultProps = {
  src: '',
  alt: 'Image',
  className: '',
};

Component.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Component;
