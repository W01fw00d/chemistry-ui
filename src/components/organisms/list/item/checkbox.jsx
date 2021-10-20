import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ListItemIcon as Icon, ListItemText as Text } from '@material-ui/core';

import Checkbox from '../../../atoms/fields/checkbox.jsx';

const Component = ({ text, value }) => {
  const useStyles = makeStyles((theme) => ({
    lineThrough: {
      textDecoration: 'line-through',
      textDecorationColor: theme.palette.primary.dark,
    },
  }));
  const classes = useStyles();

  return (
    <>
      <Icon>
        <Checkbox value={value} />
      </Icon>
      <Text className={value ? classes.lineThrough : ''} primary={text} />
    </>
  );
};

Component.defaultProps = {
  text: '',
  value: false,
};

Component.propTypes = {
  text: PropTypes.any,
  value: Checkbox.propTypes.value,
};

export default Component;
