import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import About from '../molecules/about.jsx';

import DrawerPanel from './drawerPanel.jsx';

export default function AboutDrawerPanel({ logo, authorName, email, authorUrl, projectUrl }) {
  const useStyles = makeStyles({
    drawer: {
      width: '200px',
    },
  });
  const classes = useStyles();

  return (
    <DrawerPanel className={classes.drawer}>
      <About
        logo={logo}
        authorName={authorName}
        email={email}
        authorUrl={authorUrl}
        projectUrl={projectUrl}
      />
    </DrawerPanel>
  );
}

AboutDrawerPanel.propTypes = {
  logo: PropTypes.string,
  authorName: PropTypes.string,
  email: PropTypes.string,
  authorUrl: PropTypes.string,
  projectUrl: PropTypes.string,
};
