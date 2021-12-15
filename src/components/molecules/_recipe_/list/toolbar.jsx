import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid';
import TextField from '../../../atoms/fields/text';
import Select from '../../../atoms/fields/select';
import Divider from '../../../atoms/layout/divider';
import Link from '../../../atoms/links/internal';

import DrawerPanel from '../../panels/drawer';

const Component = ({ aboutLiteral, className, handleChange, languageData, searchValue }) => {
  const useStyles = makeStyles({
    divider: {
      marginBottom: '20px',
      marginTop: '20px',
    },
    wrapper: {
      textAlign: 'center',
    },
  });
  const classes = useStyles();

  return (
    <div className={className}>
      <Grid alignItems="center" container>
        <Grid container item justifyContent="center" xs={2}>
          <DrawerPanel className={classes.wrapper}>
            <nav>
              <Link to="/about">{aboutLiteral}</Link>
            </nav>
            {languageData && <Divider className={classes.divider} />}
            {languageData && (
              <form autoComplete="off" noValidate>
                <Select
                  id="languageSelect"
                  handleChange={languageData.onChange}
                  options={languageData.options}
                  value={languageData.active}
                />
              </form>
            )}
          </DrawerPanel>
        </Grid>
        <Grid container item justifyContent="center" xs={5}>
          <form autoComplete="off" noValidate>
            <TextField handleChange={handleChange} id="search" value={searchValue} />
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

Component.defaultProps = {
  aboutLiteral: '',
  className: '',
  handleChange: () => {},
  languageData: null,
  searchValue: null,
};

Component.propTypes = {
  aboutLiteral: PropTypes.string,
  className: PropTypes.string,
  handleChange: TextField.propTypes.handleChange,
  languageData: PropTypes.shape({
    active: Select.propTypes.value,
    onChange: Select.propTypes.handleChange,
    options: Select.propTypes.options,
  }),
  searchValue: TextField.propTypes.value,
};

export default Component;
