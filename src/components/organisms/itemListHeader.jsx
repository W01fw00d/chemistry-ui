import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Grid } from '@material-ui/core';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import IconButton from '../atoms/iconButton.jsx';
import AppBar from '../molecules/appBar.jsx';
import ItemListToolbar from '../molecules/itemListToolbar.jsx';
import ItemListCategoriesBar from '../molecules/itemListCategoriesBar.jsx';

export default function ItemListHeader({
  literals,
  authorData,
  projectData,
  tags,
  searchValue,
  handleChange,
  handleClick,
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
          <ItemListToolbar
            literals={literals}
            authorData={authorData}
            projectData={projectData}
            className={classes.toolbar}
            tags={tags}
            searchValue={searchValue}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        </Grid>
        <Grid item xs={12} className={classes.container}>
          <ItemListCategoriesBar tags={tags} handleClick={handleClick} />
        </Grid>
        <Grid item xs={12} container justify="center">
          <IconButton color="primary" className={classes.overlayed} handleClick={handleClick}>
            <ArrowUpwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
}

ItemListHeader.defaultProps = {
  literals: {},
  tags: [],
  searchValue: '',
  handleChange: () => {},
  handleClick: () => {},
};

ItemListHeader.propTypes = {
  literals: PropTypes.shape({
    search: PropTypes.string,
  }),
  tags: PropTypes.arrayOf(PropTypes.object),
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
