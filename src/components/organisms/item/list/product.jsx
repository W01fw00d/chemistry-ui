import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import banner from '../../../../../public/banner.png';

import InternalLink from '../../../atoms/links/internal.jsx';
import Image from '../../../atoms/image.jsx';
import ImageFooter from '../../../molecules/item/list/imageFooter.jsx';

const Component = ({ data }) => {
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
      <article>
        <section className={classes.wrapper}>
          {data.isEditorsChoice && (
            <Image
              src={banner}
              width={640}
              height={320}
              description="Banner"
              className={classes.banner}
            />
          )}
          <Image
            src={data.image}
            width={640}
            height={360}
            description={data.name}
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
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    likeCount: PropTypes.number,
    isEditorsChoice: PropTypes.bool,
  }),
};

export default Component;
