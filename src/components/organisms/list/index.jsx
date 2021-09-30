import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NoItems from './noItems.jsx';

const Component = ({ className, items, noItemsMsg, Section, Item }) => {
  const initCurrentItemsName = () => {
    let counter = 0;
    items.forEach(section => {
      counter += section.items ? section.items.length : 0;
    });

    return Array.from({ length: counter }, () => 0);
  };

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    const checkCompleteSection = () => {
      const newCheckedSections = checkedSections;

      const currentSectionIndex = sectionsItems.findIndex(section => section.indexOf(value) !== -1);

      if (sectionsItems[currentSectionIndex].every(item => newChecked.includes(item))) {
        newCheckedSections.push(currentSectionIndex);
      }

      setCheckedSections(newCheckedSections);
    };

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

  const setCurrentNameIndex = currentRowCounter => value => {
    const newCurrentItemsName = [...currentItemsName];
    newCurrentItemsName[currentRowCounter] = value;
    setCurrentItemsName(newCurrentItemsName);
  };

  let rowCounter = -1;
  let sectionsItems = [];

  const [checked, setChecked] = useState([]);
  const [checkedSections, setCheckedSections] = useState([]);
  const [currentItemsName, setCurrentItemsName] = useState(initCurrentItemsName());

  return items && items.length > 0 ? (
    items.map((section, index) => {
      sectionsItems[index] = [];

      return (
        <Section
          {...section}
          key={`${index}`}
          index={index}
          rowCounter={rowCounter}
          className={className}
          value={checkedSections.indexOf(index) !== -1}
          handleClick={handleSectionToggle(index)}
          renderItem={(item, itemIndex) => {
            rowCounter += 1;
            sectionsItems[index].push(rowCounter);

            return (
              item && (
                <Item
                  item={item}
                  key={`${itemIndex}-${rowCounter}`}
                  rowCounter={rowCounter}
                  value={checked.indexOf(rowCounter) !== -1}
                  handleClick={handleToggle(rowCounter)}
                  currentNameIndex={currentItemsName[rowCounter]}
                  setCurrentNameIndex={setCurrentNameIndex(rowCounter)}
                />
              )
            );
          }}
        />
      );
    })
  ) : (
    <NoItems>{noItemsMsg}</NoItems>
  );
};

Component.defaultProps = {
  className: '',
  items: [],
  Section: () => { },
  Item: () => { },
};

Component.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
  noItemsMsg: PropTypes.string,
  Section: PropTypes.any,
  Item: PropTypes.any,
};

export default Component;
