import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../../../atoms/typography.jsx';

import Section from './components/section.jsx';
import Item from './components/item.jsx';

const Component = ({ className, steps }) => {
  const useStyles = makeStyles(theme => ({
    message: {
      color: theme.palette.primary.dark,
      textAlign: 'center',
      paddingBottom: '20px',
    }
  }));
  const classes = useStyles();

  let rowCounter = -1;

  const [checked, setChecked] = useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return steps && steps.length > 0 ?
    steps.map((step, index) =>
      <Section
        {...step}
        index={index}
        rowCounter={rowCounter}
        key={`${index}-${rowCounter}`}
        className={className}
        renderItem={(item, itemIndex) => {
          rowCounter += 1;

          return item && <Item
            index={itemIndex}
            rowCounter={rowCounter}
            step={item}
            key={`${itemIndex}-${rowCounter}`}
            value={checked.indexOf(rowCounter) !== -1}
            handleClick={handleToggle(rowCounter)}
          />;
        }}
      />)
    : (
      <Typography variant="body1" className={classes.message}>
        No steps required
      </Typography>
    );
}

Component.defaultProps = {
  className: '',
  steps: [],
};

Component.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.array,
};

export default Component;
