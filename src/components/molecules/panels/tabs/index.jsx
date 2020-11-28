import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, Tabs, Tab } from '@material-ui/core';

import Panel from './components/panel';

const Component = ({ tabsData }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
  }));
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const getTabId = (index) => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="simple tabs example"
        >
          {tabsData.map((tab, index) =>
            <Tab key={index} {...tab} {...getTabId(index)} />
          )}
        </Tabs>
      </AppBar>
      {tabsData.map(({ content }, index) =>
        <Panel key={index} value={value} index={index}>
          {content}
        </Panel>
      )}
    </div>
  );
};

Component.defaultProps = {
  tabsData: [],
};

Component.propTypes = {
  tabsData: PropTypes.array,
};

export default Component;
