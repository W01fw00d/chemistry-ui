import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import TextButton from './text.jsx';

const Component = ({ icon, text, handleClick }) => {
  const useStyles = makeStyles(theme => ({
    text: {
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  return (
    <TextButton handleClick={handleClick}>
      {icon}
      <span className={classes.text}>{text}</span>
    </TextButton>
  );
}

Component.defaultProps = {
  icon: <></>,
  text: '',
  handleClick: () => { },
};

Component.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Component;
