import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Divider } from '@material-ui/core';
import {
  NotificationsOutlined as NotificationsIcon,
  Check as CheckIcon
} from '@material-ui/icons';

import IconButton from '../../../atoms/buttons/icon.jsx';
import TextField from '../../../atoms/fields/text.jsx';
import About from '../../about.jsx';
import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({
  authorData,
  projectData,
  logo,
  className,
  searchValue,
  handleChange,
  handleClick,
}) =>
  <div className={className}>
    <Grid container alignItems="center">
      <Grid item xs={2} container justify="center">
        <DrawerPanel>
          <About
            logo={logo}
            authorName={authorData.name}
            email={authorData.email}
            authorUrl={authorData.url}
            projectUrl={projectData.url}
          />
          <Divider />
        </DrawerPanel>
      </Grid>
      <Grid item xs={6} container justify="center">
        <form noValidate autoComplete="off">
          <TextField
            id="search"
            value={searchValue}
            handleChange={handleChange} />
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
  </div>;

Component.defaultProps = {
  authorData: {},
  projectData: {},
  className: '',
  searchValue: null,
  handleChange: () => { },
  handleClick: () => { },
};

Component.propTypes = {
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    logo: PropTypes.string,
    url: PropTypes.string,
  }),
  logo: PropTypes.string.isRequired,
  className: PropTypes.string,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Component;
