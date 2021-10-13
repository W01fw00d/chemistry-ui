import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import Grid from '../../../atoms/layout/grid.jsx';
import IconButton from '../../../atoms/buttons/icon.jsx';
import Image from '../../../atoms/image.jsx';
import AppBar from '../../../molecules/layout/appBar.jsx';
import Toolbar from '../../../molecules/item/list/toolbar.jsx';
import TagsBar from '../../../molecules/item/list/tagsBar/index.jsx';

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
        <Grid item xs={12} container justify="center">
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
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  }),
  logo: PropTypes.shape({
    src: Image.propTypes.src,
    width: Image.propTypes.width,
    height: Image.propTypes.height,
  }),
  tags: TagsBar.propTypes.tags,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Component;
