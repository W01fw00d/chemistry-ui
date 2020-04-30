import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import Image from '../atoms/image.jsx';
import RecipeDetailAppBar from '../organisms/recipeDetailHeader.jsx';
import ItemDetailDescriptionSection from '../organisms/itemDetailDescriptionSection.jsx';

export default function RecipeDetailTemplate({ literals, data, handleClick }) {
  const useStyles = makeStyles({
    marginBottom: {
      marginBottom: theme.spacing(7),
    },
  });
  const classes = useStyles();

  return (
    data && (
      <ThemeProvider theme={theme}>
        <RecipeDetailAppBar name={data.name} handleClick={handleClick} />
        <Image src={data.image} alt={data.name} />
        {/* TODO: add new IngredientsCheckboxList component */}
        <ItemDetailDescriptionSection
          className={classes.marginBottom}
          literals={{ description: literals.ingredients }}
          description=""
        />
      </ThemeProvider>
    )
  );
}

RecipeDetailTemplate.defaultProps = {
  literals: ItemDetailDescriptionSection.defaultProps.literals,
  data: {
    name: RecipeDetailAppBar.defaultProps.name,
    image: Image.defaultProps.src,
    ingredients: [],
  },
  handleClick: () => {},
};

RecipeDetailTemplate.propTypes = {
  literals: ItemDetailDescriptionSection.propTypes.literals,
  data: PropTypes.shape({
    name: RecipeDetailAppBar.propTypes.name,
    image: Image.propTypes.src,
    ingredients: PropTypes.array,
  }),
  handleClick: PropTypes.func,
};
