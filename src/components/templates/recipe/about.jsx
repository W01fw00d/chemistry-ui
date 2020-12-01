import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../../styles/global-styles';

import Divider from '../../atoms/layout/divider.jsx';
import About from '../../molecules/about.jsx';
import Header from '../../organisms/recipe/detail/header.jsx';
import logo from '../../../../public/cooking-with-amateurs-title-logo.png';

const Component = ({ literals, authorData, projectData }) => {
  const useStyles = makeStyles({
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
    alignText: {
      'text-align': 'center',
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header name={literals.about} />
        <About
          logo={logo}
          authorName={authorData.name}
          email={authorData.email}
          authorUrl={authorData.url}
          projectUrl={projectData.url}
        />
        <Divider />
        <div className={`${classes.description} ${classes.alignText}`}>
          <p>{projectData.description}</p>
          <Divider />
          <p>
            <strong>{literals.participants}</strong>
          </p>
          {projectData.participants.map(name => (
            <p key={`${name}`}>{name}</p>
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

Component.defaultProps = {
  literals: {},
  authorData: {},
  projectData: {},
};

Component.propTypes = {
  literals: PropTypes.any,
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    description: PropTypes.string,
    logo: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Component;
