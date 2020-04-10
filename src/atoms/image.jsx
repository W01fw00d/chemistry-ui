import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

export default function Image({ src, className }) {
  const useStyles = makeStyles({
    img: {
      width: '100%',
    },
  });
  const classes = useStyles();

  return <img src={src} alt="Item Detail" className={`${classes.img} ${className}`} />;
}

Image.defaultProps = {
  src: '',
  className: '',
};

Image.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string,
};
