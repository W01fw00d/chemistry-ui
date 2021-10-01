import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Image from '../atoms/image.jsx';
import Typography from '../atoms/typography.jsx';
import ExternalLink from '../atoms/links/external.jsx';

const Component = ({ logo, projectName, authorName, email, authorUrl, projectUrl }) => {
  const useStyles = makeStyles(theme => ({
    logo: {
      paddingBottom: '10px',
    },
    link: {
      color: theme.palette.primary.dark,
    },
    paragraph: {
      padding: '20px 0',
    },
    alignText: {
      'text-align': 'center',
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <ExternalLink id="projectUrl" to={projectUrl}>
        <div className={classes.logo}>
          <Image src={logo} description={`'${projectName}' Logo`} />
        </div>
      </ExternalLink>
      <Typography variant="body1" className={`${classes.link} ${classes.alignText}`}>
        <ExternalLink id="authorUrl" to={authorUrl} className={classes.paragraph}>
          {authorName}
        </ExternalLink>
      </Typography>
      <Typography variant="body1" className={`${classes.paragraph} ${classes.alignText}`}>
        {email}
      </Typography>
    </div>
  );
};

Component.defaultProps = {
  authorName: '',
  email: '',
  authorUrl: '',
  projectUrl: '',
};

Component.propTypes = {
  logo: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  authorName: PropTypes.string,
  email: PropTypes.string,
  authorUrl: PropTypes.string,
  projectUrl: PropTypes.string,
};

export default Component;
