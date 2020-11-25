import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../../../atoms/layout/grid.jsx';
import TextButton from '../../../../../atoms/buttons/text.jsx';

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

  return (
    <Grid key={_id} item>
      <TextButton
        id={_id}
        className={`${classes.button} ${isCurrent ? classes.currentTag : ''}`}
        handleClick={handleClick}
      >
        {name}
      </TextButton>
    </Grid>
  );
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
