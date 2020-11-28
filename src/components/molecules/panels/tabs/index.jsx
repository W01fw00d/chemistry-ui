import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, Tabs, Tab } from '@material-ui/core';

import Panel from './components/panel.jsx';

const Component = ({ data }) => {
  const useStyles = makeStyles(theme => ({
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

  const getTabId = index => ({
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  });

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="secondary"
          aria-label="simple tabs example"
        >
          {data.map((tab, index) => (
            <Tab key={index} {...tab} {...getTabId(index)} />
          ))}
        </Tabs>
      </AppBar>
      {data.map(({ content }, index) => (
        <Panel key={index} value={value} index={index}>
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
