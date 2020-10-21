import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import logo from '../../../public/cooking-with-amateurs-title-logo.png';

import ListGrid from '../molecules/listGrid.jsx';
import RecipeListHeader from '../organisms/recipeListHeader.jsx';
import RecipeListItem from '../organisms/recipeListItem.jsx';

export default function RecipeListTemplate({
  literals,
  authorData,
  projectData,
  search,
  itemList,
  handleChange,
  handleClick,
}) {
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
        <RecipeListHeader
          authorData={authorData}
          projectData={projectData}
          logo={logo}
          searchValue={search}
          handleChange={handleChange}
          handleClick={handleClick}
          literals={{participants: literals.participants}}
        />
        {itemList && (
          <ListGrid>
            {itemList.map(productData => (
              <RecipeListItem
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

RecipeListTemplate.defaultProps = {
  literals: {},
  authorData: {},
  projectData: {},
  search: '',
  itemList: [],
  handleChange: () => {},
  handleClick: () => {},
};

RecipeListTemplate.propTypes = {
  literals: RecipeListItem.propTypes.literals,
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
