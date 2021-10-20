import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../../../atoms/layout/grid.jsx';
import TextButton from '../../../../../atoms/buttons/text.jsx';

const Component = ({ handleClick, id, isCurrent, name }) => {
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
    <Grid item key={id}>
      <TextButton
        className={`${classes.button} ${isCurrent ? classes.currentTag : ''}`}
        handleClick={handleClick}
        id={id}
      >
        {name}
      </TextButton>
    </Grid>
  );
};

Component.defaultProps = {
  handleClick: () => {},
  id: 0,
  isCurrent: false,
  name: '',
};

Component.propTypes = {
  handleClick: PropTypes.func,
  id: PropTypes.number,
  isCurrent: PropTypes.bool,
  name: PropTypes.string,
};

export default Component;
