import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import theme from '../../styles/global-styles';

import escapingBoredomTitleLogo from '../../../public/escaping-boredom-title-logo.png';

import ListGrid from '../molecules/listGrid.jsx';
import OverlayedIconButton from '../molecules/overlayedIconButton.jsx';
import ItemListHeader from '../organisms/itemListHeader.jsx';
import ItemListProduct from '../organisms/itemListProduct.jsx';

export default function ItemListTemplate({
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
          <ItemListHeader
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
          <ListGrid>
            {itemList.map(productData => (
              <ItemListProduct key={productData.id} data={productData} />
            ))}
          </ListGrid>
        )}
        <OverlayedIconButton handleClick={handleClick}>
          <PhotoCameraIcon />
        </OverlayedIconButton>
      </div>
    </ThemeProvider>
  );
}

ItemListTemplate.defaultProps = {
  literals: {
    search: ItemListHeader.defaultProps.literals.search,
  },
  authorData: {},
  projectData: {},
  search: '',
  itemList: [],
  tags: [],
  handleChange: () => {},
  handleClick: () => {},
};

ItemListTemplate.propTypes = {
  literals: PropTypes.shape({
    search: ItemListHeader.propTypes.literals.search,
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
