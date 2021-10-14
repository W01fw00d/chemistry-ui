import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Grid from '../../../atoms/layout/grid.jsx';
import IconButton from '../../../atoms/buttons/icon.jsx';
import AppBar from '../../../molecules/layout/appBar.jsx';
import Toolbar from '../../../molecules/[room]/list/toolbar.jsx';
import TagsBar from '../../../molecules/[room]/list/tagsBar/index.jsx';

const Component = ({
  authorData,
  projectData,
  logo,
  tags,
  searchValue,
  handleChange,
  handleClick,
}) => {
  const useStyles = makeStyles((theme) => ({
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
          />
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <TagsBar tags={tags} handleClick={handleClick} />
        </Grid>
        <Grid item xs={12} container justifyContent="center">
          <IconButton color="primary" className={classes.overlayed} handleClick={handleClick}>
            <ArrowUpwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Component.defaultProps = {
  authorData: {},
  projectData: {},
  logo: {},
  tags: [],
  searchValue: '',
  handleChange: () => {},
  handleClick: () => {},
};

Component.propTypes = {
  authorData: Toolbar.propTypes.authorData,
  projectData: Toolbar.propTypes.projectData,
  logo: Toolbar.propTypes.logo,
  tags: TagsBar.propTypes.tags,
  searchValue: Toolbar.propTypes.searchValue,
  handleChange: Toolbar.propTypes.handleChange,
  handleClick: PropTypes.func,
};

export default Component;
