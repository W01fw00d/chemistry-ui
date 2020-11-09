import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';
import { ArrowBackIos as ArrowBackIcon } from '@material-ui/icons';

import InternalLink from '../atoms/links/internal.jsx';
import Typography from '../atoms/typography.jsx';
import AppBar from '../molecules/appBar.jsx';

export default function RecipeDetailAppBar({ name }) {
  const useStyles = makeStyles(theme => ({
    layout: {
      padding: theme.spacing(1),
    },
    name: {
      textAlign: 'center',
      fontWeight: 'bold',
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Grid container alignItems="center" className={classes.layout}>
        <Grid item xs={2} container justify="center">
          <InternalLink id="back" to="/">
            <ArrowBackIcon />
          </InternalLink>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" color="inherit" className={classes.name}>
            {name}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
}

RecipeDetailAppBar.defaultProps = {
  name: '',
};

RecipeDetailAppBar.propTypes = {
  name: PropTypes.string,
};
