import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Image from '../atoms/image.jsx';
import Typography from '../atoms/typography.jsx';
import ExternalLink from '../atoms/externalLink.jsx';

export default function About({ logo, authorName, email, authorUrl, projectUrl }) {
  const useStyles = makeStyles(theme => ({
    logo: {
      width: '300px',
    },
    link: {
      color: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <ExternalLink id="projectUrl" to={projectUrl} className={classes.link}>
        <div className={classes.logo}>
          <Image src={logo} alt="App Logo" />
        </div>
      </ExternalLink>
      <p>
        <ExternalLink id="authorUrl" to={authorUrl}>
          <Typography variant="body1" className={classes.link}>
            {authorName}
          </Typography>
        </ExternalLink>
      </p>
      <p>
        <Typography variant="body1">{email}</Typography>
      </p>
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
