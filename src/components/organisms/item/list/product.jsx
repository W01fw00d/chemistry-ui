import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import banner from '../../../../../public/banner.png';

import InternalLink from '../../../atoms/links/internal.jsx';
import Image from '../../../atoms/image.jsx';
import ImageFooter from '../../../molecules/item/list/imageFooter.jsx';

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

  const getFooterData = ({ name, price, likeCount }) => ({
    name,
    price,
    likeCount,
  });

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <div className={classes.wrapper}>
        {data.isEditorsChoice && <Image src={banner} alt="Banner" className={classes.banner} />}
        <Image src={data.image} />
      </div>
      <ImageFooter data={getFooterData(data)} />
    </InternalLink>
  );
}

ItemListProduct.defaultProps = {
  data: {},
};

ItemListProduct.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    likeCount: PropTypes.number,
    isEditorsChoice: PropTypes.bool,
  }),
};
