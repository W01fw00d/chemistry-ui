import React from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
  makeStyles
} from '@material-ui/core';

import TextButton from '../../../../atoms/buttons/text.jsx';

const Component = ({ _id, isCurrent, name, handleClick }) => {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    currentTag: {
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return <Grid key={_id} item>
    <TextButton
      className={`${classes.button} ${isCurrent ? classes.currentTag : ''}`}
      id={_id}
      handleClick={handleClick}
    >
      {name}
    </TextButton >
  </Grid >;
};

Component.defaultProps = {
  _id: 0,
  name: '',
  isCurrent: false,
};

Component.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
  isCurrent: PropTypes.bool,
};

export default Component;
