import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles, AppBar, Tabs, Tab, Typography, Box } from '@material-ui/core';

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

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

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
          {tabsData.map(({ label, icon }, index) =>
            <Tab key={index} label={label} icon={icon} {...a11yProps(index)} />
          )}
        </Tabs>
      </AppBar>
      {tabsData.map(({ content }, index) =>
        <TabPanel key={index} value={value} index={index}>
          {content}
        </TabPanel>
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
