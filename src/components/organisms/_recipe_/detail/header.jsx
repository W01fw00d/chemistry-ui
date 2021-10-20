import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import { ArrowBackIos as ArrowBackIcon } from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid';
import InternalLink from '../../../atoms/links/internal';
import Typography from '../../../atoms/typography';
import AppBar from '../../../molecules/layout/appBar';

const Component = ({ name }) => {
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
          <nav>
            <InternalLink id="back" to="/">
              <ArrowBackIcon className={classes.icon} />
            </InternalLink>
          </nav>
        </Grid>
        <Grid item xs={8}>
          <Typography className={classes.name} variant="h6">
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
