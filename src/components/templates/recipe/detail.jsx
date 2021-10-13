import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import {
  Photo as PhotoIcon,
  Kitchen as KitchenIcon,
  Fastfood as FastfoodIcon,
} from '@material-ui/icons';

import theme from '../../../styles/global-styles';

import Image from '../../atoms/image.jsx';
import Header from '../../organisms/recipe/detail/header.jsx';
import IngredientsList from '../../organisms/recipe/detail/ingredientsList/index.jsx';
import StepsList from '../../organisms/recipe/detail/stepsList/index.jsx';
import Tabs from '../../molecules/panels/tabs/index.jsx';

const Component = ({ literals, data, handleClick }) => {
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
        icon: <KitchenIcon />,
        label: literals.ingredients,
        content: (
          <IngredientsList
            noItemsMsg={literals.noIngredients}
            className={classes.marginBottom}
            ingredients={data.ingredients}
          />
        ),
      },
      {
        icon: <FastfoodIcon />,
        label: literals.steps,
        content: (
          <StepsList
            noItemsMsg={literals.noSteps}
            className={classes.marginBottom}
            steps={data.steps}
          />
        ),
      },
    ];

    if (image) {
      tabsData.unshift({
        icon: <PhotoIcon />,
        label: literals.image,
        content: (
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            description={data.name}
          />
        ),
      });
    }

    return <Tabs data={tabsData} />;
  };

  return (
    data && (
      <ThemeProvider theme={theme}>
        <Header name={data.name} handleClick={handleClick} />
        <RecipeTabs />
      </ThemeProvider>
    )
  );
};

Component.defaultProps = {
  literals: {},
  data: {
    name: Header.defaultProps.name,
    image: {
      src: Image.defaultProps.src,
      width: 640,
      height: 360,
    },
    ingredients: [],
    steps: [],
  },
  handleClick: () => {},
};

Component.propTypes = {
  literals: PropTypes.shape({
    ingredients: PropTypes.string,
    noIngredients: PropTypes.string,
    steps: PropTypes.string,
    noSteps: PropTypes.string,
    image: PropTypes.string,
  }),
  data: PropTypes.shape({
    name: Header.propTypes.name,
    image: PropTypes.shape({
      src: Image.propTypes.src,
      width: Image.propTypes.width,
      height: Image.propTypes.height,
    }),
    ingredients: PropTypes.array,
    steps: PropTypes.array,
  }),
  handleClick: PropTypes.func,
};

export default Component;
