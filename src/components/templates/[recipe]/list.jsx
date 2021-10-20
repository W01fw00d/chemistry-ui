import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../../styles/global-styles';

import ListGrid from '../../molecules/layout/listGrid.jsx';
import Header from '../../organisms/[recipe]/list/header.jsx';
import Item from '../../organisms/[recipe]/list/item.jsx';

const Component = ({ handleChange, handleClick, itemList, languageData, literals, search }) => {
  const useStyles = makeStyles({
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
  });
  const classes = useStyles();

  const getRecipeListItemLiterals = ({ difficulty, howManyIngredients, preparationTime }) => ({
    difficulty,
    howManyIngredients,
    preparationTime,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header
          aboutLiteral={literals.about}
          handleChange={handleChange}
          handleClick={handleClick}
          languageData={languageData}
          searchValue={search}
        />
        {itemList && (
          <ListGrid>
            {itemList.map((productData) => (
              <Item
                data={productData}
                key={productData.id}
                literals={getRecipeListItemLiterals(literals)}
              />
            ))}
          </ListGrid>
        )}
      </div>
    </ThemeProvider>
  );
};

Component.defaultProps = {
  handleChange: () => {},
  handleClick: () => {},
  itemList: [],
  languageData: {},
  literals: {},
  search: '',
};

Component.propTypes = {
  handleChange: Header.propTypes.handleChange,
  handleClick: Header.propTypes.handleClick,
  itemList: PropTypes.arrayOf(Item.propTypes.data),
  languageData: Header.propTypes.languageData,
  literals: Item.propTypes.literals,
  search: Header.propTypes.searchValue,
};

export default Component;
