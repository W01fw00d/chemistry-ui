import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Grid
} from '@material-ui/core';

import Typography from '../../../atoms/typography.jsx';

const Component = ({ literals, data }) => {
  const useStyles = makeStyles(theme => ({
    layout: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
      textAlign: 'center',
    },
    text: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Grid container>
        {data.showName && (
          <Grid item xs={12}>
            <Typography variant="h6" className={classes.text}>
              {`[${data.name}] - ${data.eventDate}`}
            </Typography>
          </Grid>
        )}
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

Component.defaultProps = {
  literals: {},
  data: {},
};

Component.propTypes = {
  literals: PropTypes.shape({
    difficulty: PropTypes.string,
    preparationTime: PropTypes.string,
    howManyIngredients: PropTypes.string,
  }),
  data: PropTypes.shape({
    name: PropTypes.string,
    eventDate: PropTypes.string,
    difficulty: PropTypes.number,
    preparationTime: PropTypes.string,
    nIngredients: PropTypes.number,
    showName: PropTypes.bool,
  }),
};

export default Component;
