import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';
import { FavoriteBorder as LikeIcon } from '@material-ui/icons';

import Typography from '../atoms/typography';

export default function ProductImageFooter({ data }) {
  const useStyles = makeStyles(theme => ({
    layout: {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
    price: {
      fontWeight: '800',
    },
    text: {
      color: theme.palette.primary.dark,
    },
    likeCount: {
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const priceWithCurrency = `¥${data.price}`;

  return (
    <div className={classes.layout}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6" className={classes.text}>
            {data.name}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" className={`${classes.text} ${classes.price}`}>
            {priceWithCurrency}
          </Typography>
        </Grid>
        {data.likeCount > 0 && (
          <Grid item xs={6} container justify="flex-end" className={classes.text}>
            <Typography variant="h6">
              <Grid container spacing={1}>
                <Grid item xs={6} container alignItems="center">
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
    </div>
  );
}

ProductImageFooter.defaultProps = {
  data: {},
};

ProductImageFooter.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    likeCount: PropTypes.number,
  }),
};
