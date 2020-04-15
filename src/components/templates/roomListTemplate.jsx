import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import theme from '../../styles/global-styles';

import ItemListGrid from '../molecules/itemListGrid';
import OverlayedIconButton from '../molecules/overlayedIconButton';
import ItemListHeader from '../organisms/itemListHeader';
import ItemListProduct from '../organisms/itemListProduct';

export default function RoomListTemplate({
  literals,
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
            tags={tags}
            searchValue={search}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        )}
        {itemList && (
          <ItemListGrid>
            {itemList.map(productData => (
              <ItemListProduct key={productData.id} data={productData} />
            ))}
          </ItemListGrid>
        )}
        <OverlayedIconButton handleClick={handleClick}>
          <PhotoCameraIcon />
        </OverlayedIconButton>
      </div>
    </ThemeProvider>
  );
}

RoomListTemplate.defaultProps = {
  literals: {
    search: ItemListHeader.defaultProps.literals.search,
  },
  search: '',
  itemList: [],
  tags: [],
  handleChange: () => {},
  handleClick: () => {},
};

RoomListTemplate.propTypes = {
  literals: PropTypes.shape({
    search: ItemListHeader.propTypes.literals.search,
  }),
  search: PropTypes.string,
  itemList: PropTypes.arrayOf(PropTypes.object),
  tags: PropTypes.arrayOf(PropTypes.object),
  handleChange: PropTypes.func,
  handleClick: PropTypes.func,
};
