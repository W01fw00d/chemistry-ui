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
      textAlign: 'center',
    },
    noPadding: {
      padding: 0,
    },
    noListStyle: {
      display: 'initial',
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header name={literals.about} />
        <article>
          <header>
            <About
              logo={{
                src: logo,
                width: 3543,
                height: 1772,
              }}
              projectName={projectData.name}
              authorName={authorData.name}
              email={authorData.email}
              authorUrl={authorData.url}
              projectUrl={projectData.url}
            />
          </header>
          <Divider />
          <section className={classes.alignText}>
            <p>{projectData.description}</p>
          </section>
          <Divider />
          <section className={classes.alignText}>
            <p>
              <strong>{literals.participants}</strong>
            </p>
            <ul className={classes.noPadding}>
              {projectData.participants.map(name => (
                <li key={name.toLowerCase()} className={classes.noListStyle}>
                  <p>{name}</p>
                </li>
              ))}
            </ul>
          </section>
        </article>
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
  literals: PropTypes.shape({
    about: PropTypes.string,
    participants: PropTypes.string,
  }),
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    logo: PropTypes.string,
    url: PropTypes.string,
    participants: PropTypes.arrayOf(PropTypes.string)
  }),
};

export default Component;
