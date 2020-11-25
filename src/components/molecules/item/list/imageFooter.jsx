import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import { FavoriteBorder as LikeIcon } from '@material-ui/icons';

import Grid from '../../../atoms/layout/grid.jsx';
import Typography from '../../../atoms/typography.jsx';

const Component = ({ data }) => {
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
};

Component.defaultProps = {
  data: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    likeCount: PropTypes.number,
  }),
};

export default Component;
