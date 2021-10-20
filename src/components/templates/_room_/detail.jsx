import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../../styles/global-styles';

import Typography from '../../atoms/typography';
import Image from '../../atoms/image';
import Header from '../../organisms/_room_/detail/header';
import ButtonsRow from '../../organisms/_room_/detail/buttonsRow';
import DescriptionSection from '../../organisms/_room_/detail/descriptionSection';
import FooterBar from '../../organisms/_room_/detail/footerBar';

const Component = ({ data, handleClick, literals }) => {
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
    comment: literals.comment,
    like: literals.like,
  };
  const descriptionSectionLiterals = {
    description: literals.description,
  };
  const footerBarLiterals = {
    buy: literals.buy,
  };

  const footerBarData = {
    isGroupPrice: data.isGroupPrice,
    price: data.price,
  };

  const { image } = data;

  return (
    data && (
      <ThemeProvider theme={theme}>
        <Header handleClick={handleClick} name={data.name} />
        <Image description={data.name} height={image.height} src={image.src} width={image.width} />
        <Typography className={classes.name} color="inherit" variant="h6">
          {data.name}
        </Typography>
        <ButtonsRow
          handleClick={handleClick}
          likeCount={data.likeCount}
          literals={buttonsRowLiterals}
        />
        <DescriptionSection
          className={classes.marginBottom}
          description={data.description}
          literals={descriptionSectionLiterals}
        />
        <FooterBar data={footerBarData} handleClick={handleClick} literals={footerBarLiterals} />
      </ThemeProvider>
    )
  );
};

Component.defaultProps = {
  data: {
    description: ButtonsRow.defaultProps.description,
    image: {
      height: 360,
      src: '',
      width: 640,
    },
    isGroupPrice: FooterBar.defaultProps.isGroupPrice,
    likeCount: Header.defaultProps.likeCount,
    name: Header.defaultProps.name,
    price: FooterBar.defaultProps.price,
  },
  handleClick: () => {},
  literals: {
    buy: FooterBar.defaultProps.literals.buy,
    comment: ButtonsRow.defaultProps.literals.comment,
    description: DescriptionSection.defaultProps.literals.description,
    like: ButtonsRow.defaultProps.literals.like,
  },
};

Component.propTypes = {
  data: PropTypes.shape({
    description: ButtonsRow.propTypes.description,
    image: PropTypes.shape({
      height: Image.propTypes.height,
      src: Image.propTypes.src,
      width: Image.propTypes.width,
    }),
    isGroupPrice: FooterBar.propTypes.isGroupPrice,
    likeCount: Header.propTypes.likeCount,
    name: Header.propTypes.name,
    price: FooterBar.propTypes.price,
  }),
  handleClick: PropTypes.func,
  literals: PropTypes.shape({
    buy: FooterBar.propTypes.literals.buy,
    comment: ButtonsRow.propTypes.literals.comment,
    description: DescriptionSection.propTypes.literals.description,
    like: ButtonsRow.propTypes.literals.like,
  }),
};

export default Component;
