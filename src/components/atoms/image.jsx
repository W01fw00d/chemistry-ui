import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

export default function Image({ src, alt, className }) {
  const useStyles = makeStyles({
    img: {
      width: '100%',
    },
  });
  const classes = useStyles();

  return <img src={src} alt={alt} className={`${classes.img} ${className}`} />;
}

Image.defaultProps = {
  src: '',
  alt: 'Image',
  className: '',
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};
