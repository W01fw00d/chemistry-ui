import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import {
  Menu as MenuIcon,
  NotificationsOutlined as NotificationsIcon,
  Check as CheckIcon,
} from '@material-ui/icons';

import IconButton from '../atoms/iconButton';
import TextField from '../atoms/textField';

export default function ItemListToolbar({
  literals,
  className,
  searchValue,
  handleChange,
  handleClick,
}) {
  return (
    <div className={className}>
      <Grid container alignItems="center">
        <Grid item xs={2} container justify="center">
          <IconButton handleClick={handleClick}>
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item xs={6} container justify="center">
          <form noValidate autoComplete="off">
            <TextField
              id="search"
              label={literals.search}
              value={searchValue}
              handleChange={handleChange}
            />
          </form>
        </Grid>
        <Grid item xs={2} container justify="flex-end">
          <IconButton handleClick={handleClick}>
            <NotificationsIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2} container justify="flex-start">
          <IconButton handleClick={handleClick}>
            <CheckIcon />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

ItemListToolbar.defaultProps = {
  literals: {},
  searchValue: '',
  handleChange: () => {},
  handleClick: () => {},
};

ItemListToolbar.propTypes = {
  literals: PropTypes.shape({
    search: PropTypes.string,
  }),
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
