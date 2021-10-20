import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../atoms/layout/grid';

const Component = ({ children }) => {
  const useStyles = makeStyles((theme) => ({
    grid: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container spacing={2}>
      {children.map((node) => (
        <Grid item key={node.props.data.id} md={6} xs={12}>
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
