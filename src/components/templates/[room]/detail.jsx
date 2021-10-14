import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider, makeStyles } from '@material-ui/core';

import theme from '../../../styles/global-styles';

import Typography from '../../atoms/typography.jsx';
import Image from '../../atoms/image.jsx';
import Header from '../../organisms/[room]/detail/header.jsx';
import ButtonsRow from '../../organisms/[room]/detail/buttonsRow.jsx';
import DescriptionSection from '../../organisms/[room]/detail/descriptionSection.jsx';
import FooterBar from '../../organisms/[room]/detail/footerBar.jsx';

const Component = ({ literals, data, handleClick }) => {
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

  const { image } = data;

  return (
    data && (
      <ThemeProvider theme={theme}>
        <Header name={data.name} handleClick={handleClick} />
        <Image src={image.src} width={image.width} height={image.height} description={data.name} />
        <Typography variant="h6" color="inherit" className={classes.name}>
          {data.name}
        </Typography>
        <ButtonsRow
          literals={buttonsRowLiterals}
          likeCount={data.likeCount}
          handleClick={handleClick}
        />
        <DescriptionSection
          className={classes.marginBottom}
          literals={descriptionSectionLiterals}
          description={data.description}
        />
        <FooterBar literals={footerBarLiterals} data={footerBarData} handleClick={handleClick} />
      </ThemeProvider>
    )
  );
};

Component.defaultProps = {
  literals: {
    like: ButtonsRow.defaultProps.literals.like,
    comment: ButtonsRow.defaultProps.literals.comment,
    description: DescriptionSection.defaultProps.literals.description,
    buy: FooterBar.defaultProps.literals.buy,
  },
  data: {
    name: Header.defaultProps.name,
    image: {
      src: '',
      width: 640,
      height: 360,
    },
    likeCount: Header.defaultProps.likeCount,
    description: ButtonsRow.defaultProps.description,
    price: FooterBar.defaultProps.price,
    isGroupPrice: FooterBar.defaultProps.isGroupPrice,
  },
  handleClick: () => {},
};

Component.propTypes = {
  literals: PropTypes.shape({
    like: ButtonsRow.propTypes.literals.like,
    comment: ButtonsRow.propTypes.literals.comment,
    description: DescriptionSection.propTypes.literals.description,
    buy: FooterBar.propTypes.literals.buy,
  }),
  data: PropTypes.shape({
    name: Header.propTypes.name,
    image: PropTypes.shape({
      src: Image.propTypes.src,
      width: Image.propTypes.width,
      height: Image.propTypes.height,
    }),
    likeCount: Header.propTypes.likeCount,
    description: ButtonsRow.propTypes.description,
    price: FooterBar.propTypes.price,
    isGroupPrice: FooterBar.propTypes.isGroupPrice,
  }),
  handleClick: PropTypes.func,
};

export default Component;
