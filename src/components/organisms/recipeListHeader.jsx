import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';

import AppBar from '../molecules/layout/appBar.jsx';
import Toolbar from '../molecules/recipe/list/toolbar.jsx';

export default function RecipeListHeader({
  authorData,
  projectData,
  logo,
  searchValue,
  handleChange,
  handleClick,
  literals,
}) {
  const useStyles = makeStyles(theme => ({
    appbar: {
      backgroundColor: 'transparent',
      borderBottom: 'none !important',
    },
    container: {
      backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
      borderBottomWidth: '1px',
      borderBottomColor: theme.palette.primary.light,
      borderBottomStyle: 'solid',
    },
    overlayed: {
      float: 'center',
      marginTop: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="sticky" className={classes.appbar}>
      <Grid container>
        <Grid item xs={12} className={classes.container}>
          <Toolbar
            authorData={authorData}
            projectData={projectData}
            logo={logo}
            className={classes.toolbar}
            searchValue={searchValue}
            handleChange={handleChange}
            handleClick={handleClick}
            literals={literals}
          />
        </Grid>
        {/* TODO: Anchor */}
        {/* <Grid item xs={12} container justify="center">
          <IconButton color="primary" className={classes.overlayed} handleClick={handleClick}>
            <ArrowUpwardIcon />
          </IconButton>
        </Grid> */}
      </Grid>
    </AppBar>
  );
}

RecipeListHeader.defaultProps = {
  authorData: {},
  projectData: {},
  searchValue: '',
  handleChange: () => {},
  handleClick: () => {},
};

RecipeListHeader.propTypes = {
  authorData: RecipeListToolbar.propTypes.authorData,
  projectData: RecipeListToolbar.propTypes.projectData,
  logo: PropTypes.string.isRequired,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
