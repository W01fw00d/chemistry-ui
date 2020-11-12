import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../../../atoms/typography.jsx';

import Section from './section.jsx';
import Item from './item.jsx';

const Component = ({ className, ingredients }) => {
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

  return ingredients && ingredients.length > 0 ?
    ingredients.map((ingredient, sectionKey) =>
      <Section
        {...ingredient}
        key={sectionKey}
        className={className}
        renderItem={(item, itemKey) => {
          rowCounter += 1;

          return <Item
            {...item}
            key={itemKey}
            rowCounter={rowCounter}
            checked={checked}
            handleToggle={handleToggle}
          />;
        }}
      />
    )
    : (
      <Typography variant="body1" className={classes.message}>
        No ingredients required
      </Typography>
    );
}

Component.defaultProps = {
  className: '',
  ingredients: [],
};

Component.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.array,
};

export default Component;
