import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NoItems from './noItems.jsx';

const Component = ({ className, items, noItemsMsg, Section, Item }) => {
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

  return items && items.length > 0 ? (
    items.map((section, index) => {
      sectionsIngredients[index] = [];
      console.log('generic Index items', section);
      return <Section
        {...section}
        key={`${index}`}
        index={index}
        rowCounter={rowCounter}
        className={className}
        value={checkedSections.indexOf(index) !== -1}
        handleClick={handleSectionToggle(index)}
        renderItem={(item, itemIndex) => {
          rowCounter += 1;
          sectionsIngredients[index].push(rowCounter);

          return item &&
            <Item
              item={item}
              key={`${itemIndex}-${rowCounter}`}
              rowCounter={rowCounter}
              value={checked.indexOf(rowCounter) !== -1}
              handleClick={handleToggle(rowCounter)}
            />;
        }}
      />;
    })
  ) : <NoItems>
      {noItemsMsg}
    </NoItems>;
};

Component.defaultProps = {
  className: '',
  items: [],
};

Component.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default Component;
