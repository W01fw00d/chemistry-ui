import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid.jsx';
import AppBar from '../../../molecules/layout/appBar.jsx';
import Toolbar from '../../../molecules/[recipe]/list/toolbar.jsx';

const Component = ({ searchValue, handleChange, handleClick, languageData, aboutLiteral }) => {
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
            aboutLiteral={aboutLiteral}
            className={classes.toolbar}
            searchValue={searchValue}
            handleChange={handleChange}
            handleClick={handleClick}
            languageData={languageData}
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
  searchValue: '',
  handleChange: () => {},
  handleClick: () => {},
  languageData: {},
  aboutLiteral: '',
};

Component.propTypes = {
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
  languageData: Toolbar.propTypes.languageData,
  aboutLiteral: PropTypes.string,
};

export default Component;
