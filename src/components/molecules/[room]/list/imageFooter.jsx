import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import { FavoriteBorder as LikeIcon } from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid.jsx';
import Typography from '../../../atoms/typography.jsx';

const Component = ({ data }) => {
  const useStyles = makeStyles((theme) => ({
    layout: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
    likeCount: {
      marginLeft: theme.spacing(1),
    },
    price: {
      fontWeight: '800',
    },
    text: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  const priceWithCurrency = `¥${data.price}`;

  return (
    <section className={classes.layout}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.text} variant="h6">
            {data.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className={`${classes.text} ${classes.price}`} variant="h6">
            {priceWithCurrency}
          </Typography>
        </Grid>
        {data.likeCount > 0 && (
          <Grid className={classes.text} container item justifyContent="flex-end" xs={6}>
            <Typography variant="h6">
              <Grid container spacing={1}>
                <Grid alignItems="center" container item xs={6}>
                  <LikeIcon />
                </Grid>
                <Grid item xs={6}>
                  {data.likeCount}
                </Grid>
              </Grid>
            </Typography>
          </Grid>
        )}
      </Grid>
    </section>
  );
};

Component.defaultProps = {
  data: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    likeCount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Component;
