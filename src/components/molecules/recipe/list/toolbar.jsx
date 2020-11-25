import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid.jsx';
import Divider from '../../../atoms/layout/divider.jsx';
import TextField from '../../../atoms/fields/text.jsx';
import Select from '../../../atoms/fields/select.jsx';
import About from '../../about.jsx';
import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({
  authorData,
  projectData,
  logo,
  className,
  searchValue,
  handleChange,
  languageData,
  literals,
}) => {
  const useStyles = makeStyles({
    description: {
      width: '300px',
    },
    alignText: {
      'text-align': 'center',
    },
  });
  const classes = useStyles();

  return (
    <div className={className}>
      <Grid container alignItems="center">
        <Grid item xs={2} container justify="center">
          <DrawerPanel>
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
              <p>
                <strong>{literals.participants}</strong>
              </p>
              {projectData.participants.map(name => (
                <p key={`${name}`}>{name}</p>
              ))}
            </div>
          </DrawerPanel>
        </Grid>
        <Grid item xs={5} container justify="center">
          <form noValidate autoComplete="off">
            <TextField id="search" value={searchValue} handleChange={handleChange} />
          </form>
        </Grid>
        <Grid item xs={5} container justify="center">
          <form noValidate autoComplete="off">
            <Select
              value={languageData.active}
              options={languageData.options}
              handleChange={languageData.onChange}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

Component.defaultProps = {
  authorData: {},
  projectData: {},
  className: '',
  searchValue: null,
  handleChange: () => {},
};

Component.propTypes = {
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
  logo: PropTypes.string.isRequired,
  className: PropTypes.string,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Component;
