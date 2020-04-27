import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import InternalLink from '../atoms/internalLink.jsx';
import Image from '../atoms/image.jsx';
import RecipeListImageFooter from '../molecules/recipeListImageFooter.jsx';

export default function RecipeListItem({ data }) {
  const useStyles = makeStyles({
    wrapper: {
      position: 'relative',
    },
    banner: {
      position: 'absolute',
      display: 'block',
    },
  });
  const classes = useStyles();

  const footerData = {
    name: data.name,
    preparationTime: data.preparationTime,
    difficulty: data.difficulty,
    nIngredients: data.nIngredients,
  };

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <div className={classes.wrapper}>
        <Image src={data.image} />
      </div>
      <RecipeListImageFooter data={footerData} />
    </InternalLink>
  );
}

RecipeListItem.defaultProps = {
  data: {},
};

RecipeListItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    preparationTime: PropTypes.string,
    difficulty: PropTypes.number,
    nIngredients: PropTypes.number,
  }),
};
