import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import Typography from '../../../../atoms/typography.jsx';

import Section from './components/section.jsx';
import Item from './components/item.jsx';

const Component = ({ className, ingredients }) => {
  const useStyles = makeStyles(theme => ({
    message: {
      color: theme.palette.primary.dark,
      textAlign: 'center',
      paddingBottom: '20px',
    },
  }));
  const classes = useStyles();

  let rowCounter = -1;

  let sectionsIngredients = [];

  const [checked, setChecked] = useState([]);
  const [checkedSections, setCheckedSections] = useState([]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    const checkCompleteSection = () => {
      const newCheckedSections = checkedSections;

      const currentSectionIndex = sectionsIngredients.findIndex(
        section => section.indexOf(value) !== -1
      );

      if (sectionsIngredients[currentSectionIndex].every(
        ingredient => newChecked.includes(ingredient)
      )) {
        newCheckedSections.push(currentSectionIndex);
      };

      setCheckedSections(newCheckedSections);
    }

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    checkCompleteSection();
  };

  const handleSectionToggle = value => () => {
    const currentIndex = checkedSections.indexOf(value);
    const newChecked = [...checkedSections];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedSections(newChecked);
  };

  return ingredients && ingredients.length > 0 ? (
    ingredients.map((ingredient, index) => {
      sectionsIngredients[index] = [];

      return <Section
        {...ingredient}
        key={`${index}`}
        className={className}
        value={checkedSections.indexOf(index) !== -1}
        handleClick={handleSectionToggle(index)}
        renderItem={(item, itemIndex) => {
          rowCounter += 1;
          sectionsIngredients[index].push(rowCounter);

          return (
            <Item
              {...item}
              key={`${itemIndex}-${rowCounter}`}
              rowCounter={rowCounter}
              value={checked.indexOf(rowCounter) !== -1}
              handleClick={handleToggle(rowCounter)}
            />
          );
        }}
      />;
    })
  ) : (
      <Typography variant="body1" className={classes.message}>
        No ingredients required
      </Typography>
    );
};

Component.defaultProps = {
  className: '',
  ingredients: [],
};

Component.propTypes = {
  className: PropTypes.string,
  ingredients: PropTypes.array,
};

export default Component;
