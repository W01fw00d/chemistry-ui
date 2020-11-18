import React from 'react';
import PropTypes from 'prop-types';

import {
  ThemeProvider,
  makeStyles
} from '@material-ui/core';

import theme from '../../../styles/global-styles';

import logo from '../../../../public/cooking-with-amateurs-title-logo.png';

import ListGrid from '../../molecules/layout/listGrid.jsx';
import Header from '../../organisms/recipe/list/header.jsx';
import Item from '../../organisms/recipe/list/item.jsx';

const Component = ({
  literals,
  authorData,
  projectData,
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

  const getRecipeListItemLiterals =
    ({ difficulty, preparationTime, howManyIngredients }) => ({
      difficulty,
      preparationTime,
      howManyIngredients,
    });

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        <Header
          authorData={authorData}
          projectData={projectData}
          logo={logo}
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
}

Component.defaultProps = {
  literals: {},
  authorData: {},
  projectData: {},
  search: '',
  itemList: [],
  handleChange: () => { },
  handleClick: () => { },
};

Component.propTypes = {
  literals: Item.propTypes.literals,
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    url: PropTypes.string,
  }),
  search: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};

export default Component;
