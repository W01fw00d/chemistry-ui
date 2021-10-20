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
  handleChange,
  handleClick,
  logo,
  projectData,
  searchValue,
  tags,
}) => {
  const useStyles = makeStyles((theme) => ({
    appbar: {
      backgroundColor: 'transparent',
      borderBottom: 'none !important',
    },
    container: {
      backgroundColor: theme.palette.primary.main,
    },
    overlayed: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      float: 'center',
      marginTop: theme.spacing(1),
    },
    toolbar: {
      borderBottomColor: theme.palette.primary.light,
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
    },
  }));
  const classes = useStyles();

  return (
    <AppBar className={classes.appbar} position="sticky">
      <Grid container>
        <Grid className={classes.container} item xs={12}>
          <Toolbar
            authorData={authorData}
            className={classes.toolbar}
            handleChange={handleChange}
            handleClick={handleClick}
            logo={logo}
            projectData={projectData}
            searchValue={searchValue}
          />
        </Grid>
        <Grid className={classes.container} item xs={12}>
          <TagsBar handleClick={handleClick} tags={tags} />
        </Grid>
        <Grid container item justifyContent="center" xs={12}>
          <IconButton className={classes.overlayed} color="primary" handleClick={handleClick}>
            <ArrowUpwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

Component.defaultProps = {
  authorData: {},
  handleChange: () => {},
  handleClick: () => {},
  logo: {},
  projectData: {},
  searchValue: '',
  tags: [],
};

Component.propTypes = {
  authorData: Toolbar.propTypes.authorData,
  handleChange: Toolbar.propTypes.handleChange,
  handleClick: PropTypes.func,
  logo: Toolbar.propTypes.logo,
  projectData: Toolbar.propTypes.projectData,
  searchValue: Toolbar.propTypes.searchValue,
  tags: TagsBar.propTypes.tags,
};

export default Component;
