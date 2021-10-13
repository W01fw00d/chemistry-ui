import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import { ArrowBackIos as ArrowBackIcon } from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid.jsx';
import InternalLink from '../../../atoms/links/internal.jsx';
import Typography from '../../../atoms/typography.jsx';
import AppBar from '../../../molecules/layout/appBar.jsx';

const Component = ({ name }) => {
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
        <Grid item xs={2} container justify="center">
          <nav>
            <InternalLink id="back" to="/">
              <ArrowBackIcon className={classes.icon} />
            </InternalLink>
          </nav>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6" className={classes.name}>
            {name}
          </Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Component.defaultProps = {
  name: '',
};

Component.propTypes = {
  name: PropTypes.string,
};

export default Component;
