import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import TextButton from './textButton.jsx';

export default function IconTextButton({ icon, text, handleClick }) {
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

IconTextButton.defaultProps = {
  icon: <></>,
  text: '',
  handleClick: () => {},
};

IconTextButton.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string,
  handleClick: PropTypes.func,
};
