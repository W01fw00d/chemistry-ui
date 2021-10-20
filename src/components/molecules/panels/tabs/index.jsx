import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, Tabs, Tab } from '@material-ui/core';

import Panel from './components/panel';

const Component = ({ data }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      flexGrow: 1,
      width: '100%',
    },
  }));
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  const getTabId = (index) => ({
    'aria-controls': `simple-tabpanel-${index}`,
    id: `simple-tab-${index}`,
  });

  return (
    <div className={classes.root}>
      <AppBar color="default" position="static">
        <Tabs
          aria-label="simple tabs example"
          centered
          indicatorColor="secondary"
          onChange={handleChange}
          textColor="secondary"
          value={value}
        >
          {data.map((tab, index) => (
            <Tab key={index} {...tab} {...getTabId(index)} />
          ))}
        </Tabs>
      </AppBar>
      {data.map(({ content }, index) => (
        <Panel index={index} key={index} value={value}>
          {content}
        </Panel>
      ))}
    </div>
  );
};

Component.defaultProps = {
  data: [],
};

Component.propTypes = {
  data: PropTypes.array,
};

export default Component;
