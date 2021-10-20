import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import logo from '../../../../../public/cooking-with-amateurs-title-logo.png';

import InternalLink from '../../../atoms/links/internal';
import Image from '../../../atoms/image';
import Footer from '../../../molecules/_recipe_/list/imageFooter';

const Component = ({ data, literals }) => {
  const useStyles = makeStyles({
    banner: {
      display: 'block',
      position: 'absolute',
    },
    logo: {
      backgroundColor: 'white',
    },
    wrapper: {
      position: 'relative',
    },
  });
  const classes = useStyles();

  const getFooterData = ({
    difficulty,
    eventDate,
    name,
    nIngredients,
    preparationTime,
    showName,
  }) => ({
    difficulty,
    eventDate,
    name,
    nIngredients,
    preparationTime,
    showName,
  });

  const { image } = data;

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <article>
        <section className={classes.wrapper}>
          {image ? (
            <Image
              description={data.name}
              height={image.height}
              src={image.src}
              width={image.width}
            />
          ) : (
            <Image
              className={classes.logo}
              description="This Recipe doesn't have image"
              height={1772}
              src={logo}
              width={3543}
            />
          )}
        </section>
        <Footer data={getFooterData(data)} literals={literals} />
      </article>
    </InternalLink>
  );
};

Component.defaultProps = {
  data: {},
  literals: {},
};

Component.propTypes = {
  data: PropTypes.shape({
    difficulty: PropTypes.number,
    eventDate: PropTypes.string,
    id: PropTypes.number,
    image: PropTypes.shape({
      height: PropTypes.number,
      src: PropTypes.string,
      width: PropTypes.number,
    }),
    name: Image.propTypes.description,
    nIngredients: PropTypes.number,
    preparationTime: PropTypes.string,
    showName: PropTypes.bool,
  }),
  literals: Footer.propTypes.literals,
};

export default Component;
