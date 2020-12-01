import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../../atoms/layout/grid.jsx';
import TextField from '../../../atoms/fields/text.jsx';
import Select from '../../../atoms/fields/select.jsx';
import Divider from '../../../atoms/layout/divider.jsx';

import DrawerPanel from '../../panels/drawer.jsx';

const Component = ({
  className,
  searchValue,
  handleChange,
  languageData,
}) => (
    <div className={className}>
      <Grid container alignItems="center">
        <Grid item xs={2} container justify="center">
          <DrawerPanel>
            Pages links
            <Divider />
            Language selector
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
