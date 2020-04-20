import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, ThemeProvider } from '@material-ui/core';

import theme from '../../styles/global-styles';

import itemImage from '../../../public/fake_imgs/item.jpg';

import Typography from '../atoms/typography.jsx';
import Image from '../atoms/image.jsx';
import ItemDetailAppBar from '../organisms/itemDetailHeader.jsx';
import ItemDetailButtonsRow from '../organisms/itemDetailButtonsRow.jsx';
import ItemDetailDescriptionSection from '../organisms/itemDetailDescriptionSection.jsx';
import ItemDetailFooterBar from '../organisms/itemDetailFooterBar.jsx';

export default function ItemDetailTemplate({ literals, data, handleClick }) {
  const useStyles = makeStyles({
    marginBottom: {
      marginBottom: theme.spacing(7),
    },
    name: {
      padding: theme.spacing(1),
    },
  });
  const classes = useStyles();

  const buttonsRowLiterals = {
    like: literals.like,
    comment: literals.comment,
  };
  const descriptionSectionLiterals = {
    description: literals.description,
  };
  const footerBarLiterals = {
    buy: literals.buy,
  };

  const footerBarData = {
    price: data.price,
    isGroupPrice: data.isGroupPrice,
  };

  return (
    data && (
      <ThemeProvider theme={theme}>
        <ItemDetailAppBar name={data.name} handleClick={handleClick} />
        <Image src={itemImage} />
        <Typography variant="h6" color="inherit" className={classes.name}>
          {data.name}
        </Typography>
        <ItemDetailButtonsRow
          literals={buttonsRowLiterals}
          likeCount={data.likeCount}
          handleClick={handleClick}
        />
        <ItemDetailDescriptionSection
          className={classes.marginBottom}
          literals={descriptionSectionLiterals}
          description={data.description}
        />
        <ItemDetailFooterBar
          literals={footerBarLiterals}
          data={footerBarData}
          handleClick={handleClick}
        />
      </ThemeProvider>
    )
  );
}

ItemDetailTemplate.defaultProps = {
  literals: {
    like: ItemDetailButtonsRow.defaultProps.literals.like,
    comment: ItemDetailButtonsRow.defaultProps.literals.comment,
    description: ItemDetailDescriptionSection.defaultProps.literals.description,
    buy: ItemDetailFooterBar.defaultProps.literals.buy,
  },
  data: {
    name: ItemDetailAppBar.defaultProps.name,
    image: Image.defaultProps.src,
    likeCount: ItemDetailAppBar.defaultProps.likeCount,
    description: ItemDetailButtonsRow.defaultProps.description,
    price: ItemDetailFooterBar.defaultProps.price,
    isGroupPrice: ItemDetailFooterBar.defaultProps.isGroupPrice,
  },
  handleClick: () => {},
};

ItemDetailTemplate.propTypes = {
  literals: PropTypes.shape({
    like: ItemDetailButtonsRow.propTypes.literals.like,
    comment: ItemDetailButtonsRow.propTypes.literals.comment,
    description: ItemDetailDescriptionSection.propTypes.literals.description,
    buy: ItemDetailFooterBar.propTypes.literals.buy,
  }),
  data: PropTypes.shape({
    name: ItemDetailAppBar.propTypes.name,
    image: Image.propTypes.src,
    likeCount: ItemDetailAppBar.propTypes.likeCount,
    description: ItemDetailButtonsRow.propTypes.description,
    price: ItemDetailFooterBar.propTypes.price,
    isGroupPrice: ItemDetailFooterBar.propTypes.isGroupPrice,
  }),
  handleClick: PropTypes.func,
};
