import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import Typography from '../atoms/typography.jsx';
import Image from '../atoms/image.jsx';
import RecipeDetailAppBar from '../organisms/recipeDetailHeader.jsx';
import ItemDetailButtonsRow from '../organisms/itemDetailButtonsRow.jsx';
import ItemDetailDescriptionSection from '../organisms/itemDetailDescriptionSection.jsx';

export default function RecipeDetailTemplate({ literals, data, handleClick }) {
  const useStyles = makeStyles({
    marginBottom: {
      marginBottom: theme.spacing(7),
    },
    name: {
      padding: theme.spacing(1),
    },
  });
  const classes = useStyles();

  return (
    data && (
      <ThemeProvider theme={theme}>
        <RecipeDetailAppBar name={data.name} handleClick={handleClick} />
        <Image src={data.image} alt={data.name} />
        <Typography variant="h6" color="inherit" className={classes.name}>
          {data.name}
        </Typography>
        <ItemDetailDescriptionSection
          className={classes.marginBottom}
          literals={literals}
          description={data.description}
        />
      </ThemeProvider>
    )
  );
}

RecipeDetailTemplate.defaultProps = {
  literals: {
    description: ItemDetailDescriptionSection.defaultProps.literals.description,
  },
  data: {
    name: RecipeDetailAppBar.defaultProps.name,
    image: Image.defaultProps.src,
    description: ItemDetailButtonsRow.defaultProps.description,
  },
  handleClick: () => {},
};

RecipeDetailTemplate.propTypes = {
  literals: PropTypes.shape({
    description: ItemDetailDescriptionSection.propTypes.literals.description,
  }),
  data: PropTypes.shape({
    name: RecipeDetailAppBar.propTypes.name,
    image: Image.propTypes.src,
    description: ItemDetailButtonsRow.propTypes.description,
  }),
  handleClick: PropTypes.func,
};
