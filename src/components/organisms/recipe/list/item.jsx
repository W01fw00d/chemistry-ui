import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import InternalLink from '../../../atoms/links/internal.jsx';
import Image from '../../../atoms/image.jsx';
import RecipeListImageFooter from '../../../molecules/recipe/list/imageFooter.jsx';

const Component = ({ literals, data }) => {
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

  const getFooterData = ({
    name,
    eventDate,
    preparationTime,
    difficulty,
    nIngredients,
    showName,
  }) => ({
    name,
    eventDate,
    preparationTime,
    difficulty,
    nIngredients,
    showName,
  });

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <div className={classes.wrapper}>
        <Image src={data.image} />
      </div>
      <RecipeListImageFooter literals={literals} data={getFooterData(data)} />
    </InternalLink>
  );
}

Component.defaultProps = {
  literals: {},
  data: {},
};

Component.propTypes = {
  literals: RecipeListImageFooter.propTypes.literals,
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    eventDate: PropTypes.string,
    preparationTime: PropTypes.string,
    difficulty: PropTypes.number,
    nIngredients: PropTypes.number,
    showName: PropTypes.bool,
  }),
};

export default Component;
