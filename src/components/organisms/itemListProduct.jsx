import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import banner from '../../../public/banner.png';
import itemImage from '../../../public/fake_imgs/item.jpg';

import Link from '../atoms/link.jsx';
import Image from '../atoms/image.jsx';
import ProductImageFooter from '../molecules/productImageFooter.jsx';

export default function ItemListProduct({ data }) {
  const useStyles = makeStyles({
    wrapper: {
      position: 'relative',
    },
    banner: {
      position: 'absolute',
      display: 'block',
    },
  });
  const classes = useStyles();

  const footerData = {
    name: data.name,
    price: data.price,
    likeCount: data.likeCount,
  };

  return (
    <Link to={`/detail/${data.id}`}>
      <div className={classes.wrapper}>
        {data.isEditorsChoice && <Image src={banner} className={classes.banner} />}
        <Image src={itemImage} />
      </div>
      <ProductImageFooter data={footerData} />
    </Link>
  );
}

ItemListProduct.defaultProps = {
  data: {},
};

ItemListProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    likeCount: PropTypes.number,
    isEditorsChoice: PropTypes.bool,
  }),
};
