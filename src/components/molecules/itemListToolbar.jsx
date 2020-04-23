import React from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';
import { NotificationsOutlined as NotificationsIcon, Check as CheckIcon } from '@material-ui/icons';

import IconButton from '../atoms/iconButton.jsx';
import TextField from '../atoms/textField.jsx';
import AboutDrawerPanel from '../organisms/aboutDrawerPanel.jsx';

export default function ItemListToolbar({
  literals,
  authorData,
  projectData,
  className,
  searchValue,
  handleChange,
  handleClick,
}) {
  return (
    <div className={className}>
      <Grid container alignItems="center">
        <Grid item xs={2} container justify="center">
          <AboutDrawerPanel
            logo={projectData.logo}
            authorName={authorData.name}
            email={authorData.email}
            authorUrl={authorData.url}
            projectUrl={projectData.url}
          />
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
  authorData: {},
  projectData: {},
  className: '',
  searchValue: null,
  handleChange: () => {},
  handleClick: () => {},
};

ItemListToolbar.propTypes = {
  literals: PropTypes.shape({
    search: PropTypes.string,
  }),
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    logo: PropTypes.string,
    url: PropTypes.string,
  }),
  className: PropTypes.string,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
