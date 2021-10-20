import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import TextButton from './text';

const Component = ({ handleClick, icon, text }) => {
  const useStyles = makeStyles((theme) => ({
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
};

Component.defaultProps = {
  handleClick: () => {},
  icon: <></>,
  text: '',
};

Component.propTypes = {
  handleClick: TextButton.propTypes.handleClick,
  icon: PropTypes.node,
  text: PropTypes.string,
};

export default Component;
