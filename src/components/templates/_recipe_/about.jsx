import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../../styles/global-styles';

import Divider from '../../atoms/layout/divider';
import About from '../../molecules/about';
import Header from '../../organisms/_recipe_/detail/header';
import logo from '../../../../public/cooking-with-amateurs-title-logo.png';

const Component = ({ authorData, literals, projectData }) => {
  const useStyles = makeStyles({
    alignText: {
      textAlign: 'center',
    },
    horizontalPadding: {
      padding: '0 20px',
    },
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
    noListStyle: {
      display: 'initial',
    },
    noMargin: {
      margin: 0,
    },
    ul: {
      '-moz-columns': 2,
      '-webkit-columns': 2,
      columns: 2,
      padding: 0,
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
              authorName={authorData.name}
              authorUrl={authorData.url}
              email={authorData.email}
              logo={{
                height: 1772,
                src: logo,
                width: 3543,
              }}
              projectName={projectData.name}
              projectUrl={projectData.url}
            />
          </header>
          <Divider />
          <section className={classes.alignText}>
            <p className={classes.horizontalPadding}>{projectData.description}</p>
          </section>
          <Divider />
          <section className={classes.alignText}>
            <p>
              <strong>{literals.participants}</strong>
            </p>
            <ul className={classes.ul}>
              {projectData.participants.map((participant, index) => (
                <li className={classes.noListStyle} key={participant.toLowerCase()}>
                  <p className={index === 0 ? `${classes.noMargin}` : ''}>{participant}</p>
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
  authorData: {},
  literals: {},
  projectData: {},
};

Component.propTypes = {
  authorData: PropTypes.shape({
    email: About.propTypes.email,
    name: About.propTypes.authorName,
    url: About.propTypes.authorUrl,
  }),
  literals: PropTypes.shape({
    about: Header.propTypes.name,
    participants: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    description: PropTypes.string,
    logo: PropTypes.string,
    name: About.propTypes.projectName,
    participants: PropTypes.arrayOf(PropTypes.string),
    url: About.propTypes.projectUrl,
  }),
};

export default Component;
