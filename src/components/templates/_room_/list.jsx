import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import theme from '../../../styles/global-styles';

import escapingBoredomTitleLogo from '../../../../public/escaping-boredom-title-logo.png';

import ListGrid from '../../molecules/layout/listGrid';
import OverlayedIconButton from '../../molecules/buttons/overlayedIcon';
import Header from '../../organisms/_room_/list/header';
import Product from '../../organisms/_room_/list/product';

const Component = ({
  authorData,
  handleChange,
  handleClick,
  itemList,
  projectData,
  search,
  tags,
}) => {
  const useStyles = makeStyles({
    layout: {
      backgroundColor: theme.palette.primary.light,
      paddingBottom: theme.spacing(4),
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.layout}>
        {tags && (
          <Header
            authorData={authorData}
            handleChange={handleChange}
            handleClick={handleClick}
            logo={{
              height: 625,
              src: escapingBoredomTitleLogo,
              width: 1458,
            }}
            projectData={projectData}
            searchValue={search}
            tags={tags}
          />
        )}
        {itemList && (
          <ListGrid>
            {itemList.map((productData) => (
              <Product data={productData} key={productData.id} />
            ))}
          </ListGrid>
        )}
        <OverlayedIconButton handleClick={handleClick}>
          <PhotoCameraIcon />
        </OverlayedIconButton>
      </div>
    </ThemeProvider>
  );
};

Component.defaultProps = {
  authorData: {},
  handleChange: () => {},
  handleClick: () => {},
  itemList: [],
  projectData: {},
  search: '',
  tags: [],
};

Component.propTypes = {
  authorData: Header.propTypes.authorData,
  handleChange: Header.propTypes.handleChange,
  handleClick: PropTypes.func,
  itemList: PropTypes.arrayOf(PropTypes.object),
  // TODO: Issue #55; do not use object, use something more specific
  projectData: Header.propTypes.projectData,
  search: Header.propTypes.searchValue,
  tags: Header.propTypes.tags,
};

export default Component;
