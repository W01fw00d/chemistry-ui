import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid.jsx';
import Typography from '../../../atoms/typography.jsx';
import TextButton from '../../../atoms/buttons/text.jsx';
import Footer from '../../../molecules/layout/footer.jsx';

const Component = ({ data, handleClick, literals }) => {
  const useStyles = makeStyles((theme) => ({
    bar: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.secondary.light,
      padding: theme.spacing(1),
    },
    fee: {
      marginLeft: theme.spacing(1),
    },
    price: {
      padding: theme.spacing(1),
    },
    priceNumber: {
      lineHeight: 1,
    },
  }));
  const classes = useStyles();

  const priceWithCurrency = `¥${data.price}`;

  return (
    <Footer className={classes.bar}>
      <Grid alignItems="center" container>
        <Grid className={classes.price} container item justifyContent="flex-start" xs={7}>
          <Grid alignItems="flex-end" container>
            <Typography className={classes.priceNumber} color="inherit" variant="h4">
              {priceWithCurrency}
            </Typography>
            <Typography className={classes.fee} color="inherit" variant="subtitle2">
              {data.isGroupPrice ? 'Per group' : 'Per person'}
            </Typography>
          </Grid>
        </Grid>
        <Grid container item justifyContent="flex-end" xs={5}>
          <TextButton
            className={classes.button}
            color="secondary"
            handleClick={handleClick}
            size="large"
          >
            {literals.buy}
          </TextButton>
        </Grid>
      </Grid>
    </Footer>
  );
};

Component.defaultProps = {
  data: {},
  handleClick: () => {},
  literals: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    isGroupPrice: PropTypes.bool,
    price: PropTypes.number,
  }),
  handleClick: PropTypes.func,
  literals: PropTypes.shape({
    buy: PropTypes.string,
  }),
};

export default Component;
