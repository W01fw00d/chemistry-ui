import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';

import theme from '../../../styles/global-styles';

import escapingBoredomTitleLogo from '../../../../public/escaping-boredom-title-logo.png';

import ListGrid from '../../molecules/layout/listGrid.jsx';
import OverlayedIconButton from '../../molecules/buttons/overlayedIcon.jsx';
import Header from '../../organisms/[room]/list/header.jsx';
import Product from '../../organisms/[room]/list/product.jsx';

const Component = ({
  authorData,
  projectData,
  search,
  itemList,
  tags,
  handleChange,
  handleClick,
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
            projectData={projectData}
            logo={{
              src: escapingBoredomTitleLogo,
              width: 1458,
              height: 625,
            }}
            tags={tags}
            searchValue={search}
            handleChange={handleChange}
            handleClick={handleClick}
          />
        )}
        {itemList && (
          <ListGrid>
            {itemList.map((productData) => (
              <Product key={productData.id} data={productData} />
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
  projectData: {},
  search: '',
  itemList: [],
  tags: [],
  handleChange: () => {},
  handleClick: () => {},
};

Component.propTypes = {
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

export default Component;
