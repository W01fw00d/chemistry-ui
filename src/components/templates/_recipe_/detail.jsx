import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import {
  Photo as PhotoIcon,
  Kitchen as KitchenIcon,
  Fastfood as FastfoodIcon,
} from '@material-ui/icons';

import theme from '../../../styles/global-styles';

import Image from '../../atoms/image';
import Header from '../../organisms/_recipe_/detail/header';
import IngredientsList from '../../organisms/_recipe_/detail/ingredientsList/index';
import StepsList from '../../organisms/_recipe_/detail/stepsList/index';
import Tabs from '../../molecules/panels/tabs/index';

const Component = ({ data, literals }) => {
  const useStyles = makeStyles({
    marginBottom: {
      marginBottom: theme.spacing(7),
    },
  });
  const classes = useStyles();

  const { image } = data;

  const RecipeTabs = () => {
    const tabsData = [
      {
        content: (
          <IngredientsList
            className={classes.marginBottom}
            ingredients={data.ingredients}
            noItemsMsg={literals.noIngredients}
          />
        ),
        icon: <KitchenIcon />,
        label: literals.ingredients,
      },
      {
        content: (
          <StepsList
            className={classes.marginBottom}
            noItemsMsg={literals.noSteps}
            steps={data.steps}
          />
        ),
        icon: <FastfoodIcon />,
        label: literals.steps,
      },
    ];

    if (image) {
      tabsData.unshift({
        content: (
          <Image
            description={data.name}
            height={image.height}
            src={image.src}
            width={image.width}
          />
        ),
        icon: <PhotoIcon />,
        label: literals.image,
      });
    }

    return <Tabs data={tabsData} />;
  };

  return (
    data && (
      <ThemeProvider theme={theme}>
        <Header name={data.name} />
        <RecipeTabs />
      </ThemeProvider>
    )
  );
};

Component.defaultProps = {
  data: {
    image: {
      height: 360,
      src: Image.defaultProps.src,
      width: 640,
    },
    ingredients: [],
    name: Header.defaultProps.name,
    steps: [],
  },
  literals: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      height: Image.propTypes.height,
      src: Image.propTypes.src,
      width: Image.propTypes.width,
    }),
    ingredients: PropTypes.array,
    name: Header.propTypes.name,
    steps: PropTypes.array,
  }),
  literals: PropTypes.shape({
    image: PropTypes.string,
    ingredients: PropTypes.string,
    noIngredients: PropTypes.string,
    noSteps: PropTypes.string,
    steps: PropTypes.string,
  }),
};

export default Component;
