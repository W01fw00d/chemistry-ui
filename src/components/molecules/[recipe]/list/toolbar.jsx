import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid.jsx';
import TextField from '../../../atoms/fields/text.jsx';
import Select from '../../../atoms/fields/select.jsx';
import Divider from '../../../atoms/layout/divider.jsx';
import Link from '../../../atoms/links/internal.jsx';

import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({ aboutLiteral, className, searchValue, handleChange, languageData }) => {
  const useStyles = makeStyles({
    wrapper: {
      textAlign: 'center',
    },
    divider: {
      marginTop: '20px',
      marginBottom: '20px',
    },
  });
  const classes = useStyles();

  return (
    <div className={className}>
      <Grid container alignItems="center">
        <Grid item xs={2} container justifyContent="center">
          <DrawerPanel className={classes.wrapper}>
            <nav>
              <Link to="/about">{aboutLiteral}</Link>
            </nav>
            {languageData && <Divider className={classes.divider} />}
            {languageData && (
              <form noValidate autoComplete="off">
                <Select
                  value={languageData.active}
                  options={languageData.options}
                  handleChange={languageData.onChange}
                />
              </form>
            )}
          </DrawerPanel>
        </Grid>
        <Grid item xs={5} container justifyContent="center">
          <form noValidate autoComplete="off">
            <TextField id="search" value={searchValue} handleChange={handleChange} />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

Component.defaultProps = {
  aboutLiteral: '',
  className: '',
  searchValue: null,
  handleChange: () => {},
  languageData: null,
};

Component.propTypes = {
  aboutLiteral: PropTypes.string,
  className: PropTypes.string,
  searchValue: TextField.propTypes.value,
  handleChange: TextField.propTypes.handleChange,
  languageData: PropTypes.shape({
    active: Select.propTypes.value,
    options: Select.propTypes.options,
    onChange: Select.propTypes.handleChange,
  }),
};

export default Component;
