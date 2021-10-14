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

const Component = ({ name, handleClick }) => {
  const useStyles = makeStyles((theme) => ({
    layout: {
      padding: theme.spacing(1),
    },
    name: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.palette.primary.dark,
    },
    icon: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="sticky">
      <Grid container alignItems="center" className={classes.layout}>
        <Grid item xs={2} container justifyContent="center">
          <InternalLink id="back" to="/">
            <ArrowBackIcon className={classes.icon} />
          </InternalLink>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={classes.name}>
            {name}
          </Typography>
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <IconButton handleClick={handleClick}>
            <SearchIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} container justifyContent="center">
          <IconButton handleClick={handleClick}>
            <PublishIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Component.defaultProps = {
  name: '',
  handleClick: () => {},
};

Component.propTypes = {
  name: PropTypes.string,
  handleClick: IconButton.propTypes.handleClick,
};

export default Component;
