import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Image from '../atoms/image.jsx';
import Typography from '../atoms/typography.jsx';

export default function About({ logo, authorName, email, authorUrl, projectUrl }) {
  const useStyles = makeStyles(theme => ({
    logo: {
      width: '300px',
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Image src={logo} alt="App Logo" className={classes.logo} />
      <Typography variant="body1">{authorName}</Typography>
      <Typography variant="body1">{email}</Typography>
      <Typography variant="body1">{authorUrl}</Typography>
      <Typography variant="body1">{projectUrl}</Typography>
    </div>
  );
}

About.propTypes = {
  logo: PropTypes.string,
  authorName: PropTypes.string,
  email: PropTypes.string,
  authorUrl: PropTypes.string,
  projectUrl: PropTypes.string,
};
