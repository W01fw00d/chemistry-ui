import React, { useState } from 'react';
import PropTypes from 'prop-types';

import NoItems from './noItems';

const Component = ({ className, Item, items, noItemsMsg, Section }) => {
  let rowCounter = -1;
  const sectionsItems = [];

  const initCurrentItemsName = () => {
    let counter = 0;
    items.forEach((section) => {
      counter += section.items ? section.items.length : 0;
    });

    return Array.from({ length: counter }, () => 0);
  };

  const [currentItemsName, setCurrentItemsName] = useState(initCurrentItemsName());
  const [checked, setChecked] = useState([]);
  const [checkedSections, setCheckedSections] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    const checkCompleteSection = () => {
      const newCheckedSections = checkedSections;

      const currentSectionIndex = sectionsItems.findIndex(
        (section) => section.indexOf(value) !== -1,
      );

      if (sectionsItems[currentSectionIndex].every((item) => newChecked.includes(item))) {
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

  const handleSectionToggle = (value) => () => {
    const currentIndex = checkedSections.indexOf(value);
    const newChecked = [...checkedSections];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCheckedSections(newChecked);
  };

  const setCurrentNameIndex = (currentRowCounter) => (value) => {
    const newCurrentItemsName = [...currentItemsName];
    newCurrentItemsName[currentRowCounter] = value;
    setCurrentItemsName(newCurrentItemsName);
  };

  return items && items.length > 0 ? (
    items.map((section, index) => {
      sectionsItems[index] = [];

      return (
        <section key={section.id}>
          <Section
            {...section}
            className={className}
            handleClick={handleSectionToggle(index)}
            index={index}
            renderItem={(item, itemIndex) => {
              rowCounter += 1;
              sectionsItems[index].push(rowCounter);

              return (
                item && (
                  <Item
                    currentNameIndex={currentItemsName[rowCounter]}
                    handleClick={handleToggle(rowCounter)}
                    item={item}
                    key={`${itemIndex}-${rowCounter}`}
                    rowCounter={rowCounter}
                    setCurrentNameIndex={setCurrentNameIndex(rowCounter)}
                    value={checked.indexOf(rowCounter) !== -1}
                  />
                )
              );
            }}
            rowCounter={rowCounter}
            value={checkedSections.indexOf(index) !== -1}
          />
        </section>
      );
    })
  ) : (
    <NoItems>{noItemsMsg}</NoItems>
  );
};

Component.defaultProps = {
  className: '',
  Item: () => {},
  items: [],
  noItemsMsg: '',
  Section: () => {},
};

Component.propTypes = {
  className: PropTypes.string,
  Item: PropTypes.any,
  items: PropTypes.array,
  noItemsMsg: PropTypes.string,
  Section: PropTypes.any,
};

export default Component;
