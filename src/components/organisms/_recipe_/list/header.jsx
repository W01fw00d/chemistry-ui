import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid';
import AppBar from '../../../molecules/layout/appBar';
import Toolbar from '../../../molecules/_recipe_/list/toolbar';

const Component = ({ aboutLiteral, handleChange, handleClick, languageData, searchValue }) => {
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
            aboutLiteral={aboutLiteral}
            className={classes.toolbar}
            handleChange={handleChange}
            handleClick={handleClick}
            languageData={languageData}
            searchValue={searchValue}
          />
        </Grid>
        {/* TODO: Anchor */}
        {/* <Grid item xs={12} container justifyContent="center">
          <IconButton color="primary" className={classes.overlayed} handleClick={handleClick}>
            <ArrowUpwardIcon />
          </IconButton>
        </Grid> */}
      </Grid>
    </AppBar>
  );
};

Component.defaultProps = {
  aboutLiteral: '',
  handleChange: () => {},
  handleClick: () => {},
  languageData: {},
  searchValue: '',
};

Component.propTypes = {
  aboutLiteral: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  languageData: Toolbar.propTypes.languageData,
  searchValue: PropTypes.string,
};

export default Component;
