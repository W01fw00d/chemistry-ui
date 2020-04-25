import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import banner from '../../../public/banner.png';

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
    price: data.price,
    likeCount: data.likeCount,
    preparationTime: data.preparationTime,
    difficulty: data.difficulty,
    nIngredients: data.nIngredients,
  };

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <div className={classes.wrapper}>
        {data.isEditorsChoice && <Image src={banner} alt="Banner" className={classes.banner} />}
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
    price: PropTypes.number,
    likeCount: PropTypes.number,
    isEditorsChoice: PropTypes.bool,
  }),
};
