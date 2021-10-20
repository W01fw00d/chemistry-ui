import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid';
import Typography from '../../../atoms/typography';

const Component = ({ data, literals }) => {
  const useStyles = makeStyles((theme) => ({
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

  const GridItem = ({ children }) => (
    <Grid item xs={12}>
      <Typography className={classes.text} variant="h6">
        {children}
      </Typography>
    </Grid>
  );
  GridItem.propTypes = {
    children: PropTypes.string.isRequired,
  };

  return (
    <section className={classes.layout}>
      <Grid container>
        {data.showName && <GridItem>{`[${data.name}] - ${data.eventDate}`}</GridItem>}
        <GridItem>{`${literals.difficulty}: ${data.difficulty}/5`}</GridItem>
        <GridItem>{`${literals.preparationTime}: ${data.preparationTime} h`}</GridItem>
        <GridItem>{`${literals.howManyIngredients} ${data.nIngredients}`}</GridItem>
      </Grid>
    </section>
  );
};

Component.defaultProps = {
  data: {},
  literals: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    difficulty: PropTypes.number,
    eventDate: PropTypes.string,
    name: PropTypes.string,
    nIngredients: PropTypes.number,
    preparationTime: PropTypes.string,
    showName: PropTypes.bool,
  }),
  literals: PropTypes.shape({
    difficulty: PropTypes.string,
    howManyIngredients: PropTypes.string,
    preparationTime: PropTypes.string,
  }),
};

export default Component;
