import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

export default function ItemListGrid({ children }) {
  const useStyles = makeStyles(theme => ({
    grid: {
      padding: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  return (
    <Grid container className={classes.grid} spacing={2}>
      {children.map(node => (
        <Grid item xs={12} md={6} key={node.props.data.id}>
          {node}
        </Grid>
      ))}
    </Grid>
  );
}

ItemListGrid.defaultProps = {
  children: <></>,
};

ItemListGrid.propTypes = {
  children: PropTypes.node,
};
