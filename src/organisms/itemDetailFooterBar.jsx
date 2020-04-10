import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import Typography from '../atoms/typography';
import TextButton from '../atoms/textButton';
import Footer from '../molecules/footer';

export default function ItemDetailFooterBar({ literals, data, handleClick }) {
  const useStyles = makeStyles(theme => ({
    bar: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
      padding: theme.spacing(1),
    },
    price: {
      padding: theme.spacing(1),
    },
    priceNumber: {
      lineHeight: 1,
    },
    fee: {
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const priceWithCurrency = `¥${data.price}`;

  return (
    <Footer className={classes.bar}>
      <Grid container alignItems="center">
        <Grid item xs={7} container justify="flex-start" className={classes.price}>
          <Grid container alignItems="flex-end">
            <Typography variant="h4" color="inherit" className={classes.priceNumber}>
              {priceWithCurrency}
            </Typography>
            <Typography variant="subtitle2" color="inherit" className={classes.fee}>
              {data.isGroupPrice ? 'Per group' : 'Per person'}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={5} container justify="flex-end">
          <TextButton
            color="secondary"
            size="large"
            className={classes.button}
            handleClick={handleClick}
          >
            {literals.buy}
          </TextButton>
        </Grid>
      </Grid>
    </Footer>
  );
}

ItemDetailFooterBar.defaultProps = {
  literals: {},
  data: {},
  handleClick: () => {},
};

ItemDetailFooterBar.propTypes = {
  literals: PropTypes.shape({
    buy: PropTypes.string,
  }),
  data: PropTypes.shape({
    price: PropTypes.number,
    isGroupPrice: PropTypes.boolean,
  }),
  handleClick: PropTypes.func,
};
