import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import banner from '../../../../../public/banner.png';

import InternalLink from '../../../atoms/links/internal';
import Image from '../../../atoms/image';
import ImageFooter from '../../../molecules/_room_/list/imageFooter';

const Component = ({ data }) => {
  const useStyles = makeStyles({
    banner: {
      display: 'block',
      position: 'absolute',
    },
    wrapper: {
      position: 'relative',
    },
  });
  const classes = useStyles();

  const getFooterData = ({ likeCount, name, price }) => ({
    likeCount,
    name,
    price,
  });

  const { image } = data;

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <article>
        <section className={classes.wrapper}>
          {data.isEditorsChoice && (
            <Image
              className={classes.banner}
              description="Banner"
              height={320}
              src={banner}
              width={640}
            />
          )}
          <Image
            description={data.name}
            height={image.height}
            src={image.src}
            width={image.width}
          />
        </section>
        <ImageFooter data={getFooterData(data)} />
      </article>
    </InternalLink>
  );
};

Component.defaultProps = {
  data: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.shape({
      height: Image.propTypes.height,
      src: Image.propTypes.src,
      width: Image.propTypes.width,
    }),
    isEditorsChoice: PropTypes.bool,
    likeCount: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};

export default Component;
