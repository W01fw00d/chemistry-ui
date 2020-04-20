import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import TextButton from '../atoms/textButton.jsx';

export default function ItemListCategoriesBar({ tags, handleClick }) {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.primary.main,
    },
    currentCategory: {
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return (
    <Grid container justify="center">
      {tags.map(category => (
        <Grid key={category.id} item>
          <TextButton
            className={`${classes.button} ${category.isCurrent ? classes.currentCategory : ''}`}
            id={category.id}
            handleClick={handleClick}
          >
            {category.name}
          </TextButton>
        </Grid>
      ))}
    </Grid>
  );
}

ItemListCategoriesBar.defaultProps = {
  tags: [],
  handleClick: () => {},
};

ItemListCategoriesBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
  handleClick: PropTypes.func,
};
