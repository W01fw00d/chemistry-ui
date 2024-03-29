import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Image from '../atoms/image';
import Typography from '../atoms/typography';
import ExternalLink from '../atoms/links/external';
import Button from '../atoms/buttons/iconText';

const Component = ({ authorName, authorUrl, email, logo, projectName, projectUrl }) => {
  const useStyles = makeStyles((theme) => ({
    alignText: {
      textAlign: 'center',
    },
    link: {
      color: theme.palette.primary.dark,
    },
    logo: {
      paddingBottom: '10px',
    },
    paragraph: {
      padding: '20px 0',
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <ExternalLink id="projectUrl" to={projectUrl}>
        <div className={classes.logo}>
          <Image
            description={`'${projectName}' Logo`}
            height={logo.height}
            src={logo.src}
            width={logo.width}
          />
        </div>
      </ExternalLink>
      <Typography className={`${classes.link} ${classes.alignText}`} variant="body1">
        <ExternalLink id="authorUrl" to={authorUrl}>
          <Button icon={<LinkedInIcon />} text={authorName} />
        </ExternalLink>
      </Typography>
      <Typography className={`${classes.paragraph} ${classes.alignText}`} variant="body1">
        {email}
      </Typography>
    </div>
  );
};

Component.defaultProps = {
  authorName: '',
  authorUrl: '',
  email: '',
  projectUrl: '',
};

Component.propTypes = {
  authorName: PropTypes.string,
  authorUrl: ExternalLink.propTypes.to,
  email: PropTypes.string,
  logo: PropTypes.shape({
    height: Image.propTypes.height,
    src: Image.propTypes.src,
    width: Image.propTypes.width,
  }).isRequired,
  projectName: PropTypes.string.isRequired,
  projectUrl: ExternalLink.propTypes.to,
};

export default Component;
