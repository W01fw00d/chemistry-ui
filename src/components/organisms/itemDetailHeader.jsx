import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';
import {
  ArrowBackIos as ArrowBackIcon,
  Search as SearchIcon,
  Publish as PublishIcon,
} from '@material-ui/icons';

import Link from '../atoms/link.jsx';
import Typography from '../atoms/typography.jsx';
import IconButton from '../atoms/iconButton.jsx';
import AppBar from '../molecules/appBar.jsx';

export default function ItemDetailAppBar({ name, handleClick }) {
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
          <Link id="back" to="/">
            <ArrowBackIcon />
          </Link>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="inherit" className={classes.name}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={2} container justify="center">
          <IconButton handleClick={handleClick}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} container justify="center">
          <IconButton handleClick={handleClick}>
            <PublishIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

ItemDetailAppBar.defaultProps = {
  name: '',
  handleClick: () => {},
};

ItemDetailAppBar.propTypes = {
  name: PropTypes.string,
  handleClick: PropTypes.func,
};
