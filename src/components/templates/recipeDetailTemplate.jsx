import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import Image from '../atoms/image.jsx';
import AppBar from '../organisms/recipeDetailHeader.jsx';
import IngredientsList from '../organisms/recipeIngredientsList.jsx';
import StepsList from '../organisms/recipeStepsList.jsx';

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
        <AppBar name={data.name} handleClick={handleClick} />
        <Image src={data.image} alt={data.name} />
        <IngredientsList className={classes.marginBottom} ingredients={data.ingredients} />
        <StepsList className={classes.marginBottom} steps={data.steps} />
      </ThemeProvider>
    )
  );
}

RecipeDetailTemplate.defaultProps = {
  data: {
    name: AppBar.defaultProps.name,
    image: Image.defaultProps.src,
    ingredients: [],
    steps: [],
  },
  handleClick: () => {},
};

RecipeDetailTemplate.propTypes = {
  data: PropTypes.shape({
    name: AppBar.propTypes.name,
    image: Image.propTypes.src,
    ingredients: PropTypes.array,
    steps: PropTypes.array,
  }),
  handleClick: PropTypes.func,
};
