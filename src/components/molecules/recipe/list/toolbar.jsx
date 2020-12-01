import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Grid from '../../../atoms/layout/grid.jsx';
import TextField from '../../../atoms/fields/text.jsx';
import Select from '../../../atoms/fields/select.jsx';
import Divider from '../../../atoms/layout/divider.jsx';
import Link from '../../../atoms/links/internal.jsx';

import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({
  aboutLiteral,
  className,
  searchValue,
  handleChange,
  languageData,
}) => {
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
    <div className={className} >
      <Grid container alignItems="center">
        <Grid item xs={2} container justify="center">
          <DrawerPanel className={classes.wrapper}>
            <Link to="/about">
              {aboutLiteral}
            </Link>
            <Divider className={classes.divider} />
            <form noValidate autoComplete="off">
              <Select
                value={languageData.active}
                options={languageData.options}
                handleChange={languageData.onChange}
              />
            </form>
          </DrawerPanel>
        </Grid>
        <Grid item xs={5} container justify="center">
          <form noValidate autoComplete="off">
            <TextField id="search" value={searchValue} handleChange={handleChange} />
          </form>
        </Grid>
      </Grid>
    </div>
  );
}

Component.defaultProps = {
  className: '',
  searchValue: null,
  handleChange: () => { },
};

Component.propTypes = {
  className: PropTypes.string,
  searchValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Component;
