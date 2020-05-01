import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import Image from '../atoms/image.jsx';
import RecipeDetailAppBar from '../organisms/recipeDetailHeader.jsx';
import RecipeIngredientsList from '../organisms/recipeIngredientsList.jsx';

export default function RecipeDetailTemplate({ data, handleClick }) {
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
        <RecipeIngredientsList className={classes.marginBottom} ingredients={data.ingredients} />
      </ThemeProvider>
    )
  );
}

RecipeDetailTemplate.defaultProps = {
  data: {
    name: RecipeDetailAppBar.defaultProps.name,
    image: Image.defaultProps.src,
    ingredients: [],
  },
  handleClick: () => {},
};

RecipeDetailTemplate.propTypes = {
  data: PropTypes.shape({
    name: RecipeDetailAppBar.propTypes.name,
    image: Image.propTypes.src,
    ingredients: PropTypes.array,
  }),
  handleClick: PropTypes.func,
};
