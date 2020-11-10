import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import TextButton from '../../../atoms/buttons/text.jsx';

const Component = ({ tags, handleClick }) => {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    currentTag: {
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  const TagButton = ({ _id, isCurrent, name }) => (
    <Grid key={_id} item>
      <TextButton
        className={`${classes.button} ${isCurrent ? classes.currentTag : ''}`}
        id={_id}
        handleClick={handleClick}
      >
        {name}
      </TextButton>
    </Grid>
  );
  TagButton.defaultProps = {
    _id: 0,
    name: '',
    isCurrent: false,
  };
  TagButton.propTypes = {
    _id: PropTypes.number,
    name: PropTypes.string,
    isCurrent: PropTypes.bool,
  };

  return (
    <Grid container justify="center">
      {tags.map(TagButton)}
    </Grid>
  );
}

Component.defaultProps = {
  tags: [],
  handleClick: () => { },
};

Component.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number,
      name: PropTypes.string,
      isCurrent: PropTypes.bool,
    }),
  ),
  handleClick: PropTypes.func,
};

export default Component;
