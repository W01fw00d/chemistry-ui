import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid, Divider } from '@material-ui/core';
import { NotificationsOutlined as NotificationsIcon, Check as CheckIcon } from '@material-ui/icons';

import IconButton from '../atoms/iconButton.jsx';
import TextField from '../atoms/textField.jsx';
import About from './about.jsx';
import DrawerPanel from '../organisms/drawerPanel.jsx';

export default function RecipeListToolbar({
  literals,
  authorData,
  projectData,
  logo,
  className,
  searchValue,
  handleChange,
  handleClick,
}) {
  const useStyles = makeStyles(theme => ({
    description: {
      width: '300px',
    },
  }));
  const classes = useStyles();

  return (
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
            <p className={classes.description}>{projectData.description}</p>
          </DrawerPanel>
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
      </Grid>
    </div>
  );
}

RecipeListToolbar.defaultProps = {
  literals: {},
  authorData: {},
  projectData: {},
  className: '',
  searchValue: null,
  handleChange: () => {},
  handleClick: () => {},
};

RecipeListToolbar.propTypes = {
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
