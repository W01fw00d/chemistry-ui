import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../../../atoms/layout/grid.jsx';
import TextButton from '../../../../../atoms/buttons/text.jsx';

const Component = ({ id, isCurrent, name, handleClick }) => {
  const useStyles = makeStyles((theme) => ({
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    currentTag: {
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return (
    <Grid key={id} item>
      <TextButton
        id={id}
        className={`${classes.button} ${isCurrent ? classes.currentTag : ''}`}
        handleClick={handleClick}
      >
        {name}
      </TextButton>
    </Grid>
  );
};

Component.defaultProps = {
  id: 0,
  name: '',
  isCurrent: false,
  handleClick: () => {},
};

Component.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  isCurrent: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Component;
