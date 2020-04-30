import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import TextButton from '../atoms/textButton.jsx';

export default function ItemListTagsBar({ tags, handleClick }) {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    currentTag: {
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  const TabButton = ({ _id, isCurrent, name }) => (
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

  return (
    <Grid container justify="center">
      {tags.map(TabButton)}
    </Grid>
  );
}

ItemListTagsBar.defaultProps = {
  tags: [],
  handleClick: () => {},
};

ItemListTagsBar.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      isCurrent: PropTypes.bool,
    }),
  ),
  handleClick: PropTypes.func,
};
