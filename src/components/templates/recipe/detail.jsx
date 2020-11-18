import React from 'react';
import PropTypes from 'prop-types';

import {
  ThemeProvider,
  makeStyles
} from '@material-ui/core';

import theme from '../../../styles/global-styles';

import Image from '../../atoms/image.jsx';
import Header from '../../organisms/recipe/detail/header.jsx';
import IngredientsList from '../../organisms/recipe/detail/ingredientsList/index.jsx';
import StepsList from '../../organisms/recipe/detail/stepsList/index.jsx';

const Component = ({ data, handleClick }) => {
  const useStyles = makeStyles({
    marginBottom: {
      marginBottom: theme.spacing(7),
    },
  });
  const classes = useStyles();

  return (
    data && (
      <ThemeProvider theme={theme}>
        <Header
          name={data.name}
          handleClick={handleClick}
        />
        <Image
          src={data.image}
          alt={data.name}
        />
        <IngredientsList
          className={classes.marginBottom}
          ingredients={data.ingredients}
        />
        <StepsList
          className={classes.marginBottom}
          steps={data.steps}
        />
      </ThemeProvider>
    )
  );
}

Component.defaultProps = {
  data: {
    name: Header.defaultProps.name,
    image: Image.defaultProps.src,
    ingredients: [],
    steps: [],
  },
  handleClick: () => { },
};

Component.propTypes = {
  data: PropTypes.shape({
    name: Header.propTypes.name,
    image: Image.propTypes.src,
    ingredients: PropTypes.array,
    steps: PropTypes.array,
  }),
  handleClick: PropTypes.func,
};

export default Component;
