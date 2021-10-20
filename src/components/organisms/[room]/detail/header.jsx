import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import {
  ArrowBackIos as ArrowBackIcon,
  Search as SearchIcon,
  Publish as PublishIcon,
} from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid.jsx';
import InternalLink from '../../../atoms/links/internal.jsx';
import Typography from '../../../atoms/typography.jsx';
import IconButton from '../../../atoms/buttons/icon.jsx';
import AppBar from '../../../molecules/layout/appBar.jsx';

const Component = ({ handleClick, name }) => {
  const useStyles = makeStyles((theme) => ({
    icon: {
      color: theme.palette.primary.dark,
    },
    layout: {
      padding: theme.spacing(1),
    },
    name: {
      color: theme.palette.primary.dark,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Grid alignItems="center" className={classes.layout} container>
        <Grid container item justifyContent="center" xs={2}>
          <InternalLink id="back" to="/">
            <ArrowBackIcon className={classes.icon} />
          </InternalLink>
        </Grid>
        <Grid item xs={6}>
          <Typography className={classes.name} variant="h6">
            {name}
          </Typography>
        </Grid>
        <Grid container item justifyContent="center" xs={2}>
          <IconButton handleClick={handleClick}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid container item justifyContent="center" xs={2}>
          <IconButton handleClick={handleClick}>
            <PublishIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Component.defaultProps = {
  handleClick: () => {},
  name: '',
};

Component.propTypes = {
  handleClick: IconButton.propTypes.handleClick,
  name: PropTypes.string,
};

export default Component;
