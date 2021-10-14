import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../atoms/layout/grid.jsx';

const Component = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    grid: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={2}>
      {children.map((node) => (
        <Grid item xs={12} md={6} key={node.props.data.id}>
          {node}
        </Grid>
      ))}
    </Grid>
  );
};

Component.defaultProps = {
  children: <></>,
};

Component.propTypes = {
  children: PropTypes.node,
};

export default Component;
