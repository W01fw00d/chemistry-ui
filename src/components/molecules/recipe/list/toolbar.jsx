import React from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Grid,
  Divider
} from '@material-ui/core';

import TextField from '../../../atoms/fields/text.jsx';
import About from '../../about.jsx';
import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({
  authorData,
  projectData,
  logo,
  className,
  searchValue,
  handleChange,
  literals,
}) => {
  const useStyles = makeStyles({
    description: {
      width: '300px',
    },
    alignText: {
      'text-align': 'center',
    }
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
              {projectData.participants.map(
                (name) => <p key={`${name}`}>{name}</p>
              )}
            </div>
          </DrawerPanel>
        </Grid>
        <Grid item xs={8} container justify="center">
          <form noValidate autoComplete="off">
            <TextField
              id="search"
              value={searchValue}
              handleChange={handleChange}
            />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

Component.defaultProps = {
  authorData: {},
  projectData: {},
  className: '',
  searchValue: null,
  handleChange: () => { },
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
