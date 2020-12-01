import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../../styles/global-styles';

import ListGrid from '../../molecules/layout/listGrid.jsx';
import Header from '../../organisms/recipe/list/header.jsx';
import Item from '../../organisms/recipe/list/item.jsx';

const Component = ({
  literals,
  search,
  itemList,
  languageData,
  handleChange,
  handleClick,
}) => {
  const useStyles = makeStyles({
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
  });
  const classes = useStyles();

  const getRecipeListItemLiterals = ({ difficulty, preparationTime, howManyIngredients }) => ({
    difficulty,
    preparationTime,
    howManyIngredients,
  });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header
          searchValue={search}
          handleChange={handleChange}
          handleClick={handleClick}
          languageData={languageData}
          literals={{ participants: literals.participants }}
        />
        {itemList && (
          <ListGrid>
            {itemList.map(productData => (
              <Item
                literals={getRecipeListItemLiterals(literals)}
                key={productData.id}
                data={productData}
              />
            ))}
          </ListGrid>
        )}
      </div>
    </ThemeProvider>
  );
};

Component.defaultProps = {
  literals: {},
  search: '',
  itemList: [],
  handleChange: () => { },
  handleClick: () => { },
};

Component.propTypes = {
  literals: Item.propTypes.literals,
  search: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Component;
