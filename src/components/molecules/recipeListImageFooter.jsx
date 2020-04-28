import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import Typography from '../atoms/typography.jsx';

export default function RecipeListImageFooter({ literals, data }) {
  const useStyles = makeStyles(theme => ({
    layout: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
    text: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.text}>
            {`${literals.difficulty}: ${data.difficulty}/5`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.text}>
            {`${literals.preparationTime}: ${data.preparationTime} h`}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.text}>
            {`${literals.howManyIngredients} ${data.nIngredients}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

RecipeListImageFooter.defaultProps = {
  literals: {},
  data: {},
};

RecipeListImageFooter.propTypes = {
  literals: PropTypes.shape({
    difficulty: PropTypes.string,
    preparationTime: PropTypes.string,
    howManyIngredients: PropTypes.string,
  }),
  data: PropTypes.shape({
    difficulty: PropTypes.number,
    preparationTime: PropTypes.string,
    nIngredients: PropTypes.number,
  }),
};
