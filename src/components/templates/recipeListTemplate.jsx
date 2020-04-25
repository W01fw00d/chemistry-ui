import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import escapingBoredomTitleLogo from '../../../public/escaping-boredom-title-logo.png';

import ItemListGrid from '../molecules/itemListGrid.jsx';
import RecipeListHeader from '../organisms/recipeListHeader.jsx';
import RecipeListItem from '../organisms/recipeListItem.jsx';

export default function RecipeListTemplate({
  literals,
  authorData,
  projectData,
  search,
  itemList,
  tags,
  handleChange,
  handleClick,
}) {
  const useStyles = makeStyles({
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
  });
  const classes = useStyles();

  const itemListHeaderLiterals = {
    search: literals.search,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        {tags && (
          <RecipeListHeader
            literals={itemListHeaderLiterals}
            authorData={authorData}
            projectData={projectData}
            logo={escapingBoredomTitleLogo}
            tags={tags}
            searchValue={search}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        )}
        {itemList && (
          <ItemListGrid>
            {itemList.map(productData => (
              <RecipeListItem key={productData.id} data={productData} />
            ))}
          </ItemListGrid>
        )}
      </div>
    </ThemeProvider>
  );
}

RecipeListTemplate.defaultProps = {
  literals: {
    search: RecipeListHeader.defaultProps.literals.search,
  },
  authorData: {},
  projectData: {},
  search: '',
  itemList: [],
  tags: [],
  handleChange: () => {},
  handleClick: () => {},
};

RecipeListTemplate.propTypes = {
  literals: PropTypes.shape({
    search: RecipeListHeader.propTypes.literals.search,
  }),
  authorData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    url: PropTypes.string,
  }),
  projectData: PropTypes.shape({
    url: PropTypes.string,
  }),
  search: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
