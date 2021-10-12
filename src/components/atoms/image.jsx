import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

const Component = ({ src, description, className }) => {
  const useStyles = makeStyles({
    img: {
      width: '100%',
      height: 'auto'
    },
  });
  const classes = useStyles();

  return (
    <img
      width="1080" // TODO: store the width and height of every image and pass it as a prop
      height="1440"
      loading="lazy"
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
