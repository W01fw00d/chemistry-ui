import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core';

import logo from '../../../../../public/cooking-with-amateurs-title-logo.png';

import InternalLink from '../../../atoms/links/internal.jsx';
import Image from '../../../atoms/image.jsx';
import Footer from '../../../molecules/recipe/list/imageFooter.jsx';

const Component = ({ literals, data }) => {
  const useStyles = makeStyles({
    wrapper: {
      position: 'relative',
    },
    banner: {
      position: 'absolute',
      display: 'block',
    },
    logo: {
      backgroundColor: 'white',
    },
  });
  const classes = useStyles();

  const getFooterData = ({
    name,
    eventDate,
    preparationTime,
    difficulty,
    nIngredients,
    showName,
  }) => ({
    name,
    eventDate,
    preparationTime,
    difficulty,
    nIngredients,
    showName,
  });

  const { image } = data;

  return (
    <InternalLink to={`/detail/${data.id}`}>
      <article>
        <section className={classes.wrapper}>
          {
            image ?
              <Image src={image} description={data.name} /> :
              (
                <Image
                  src={logo}
                  description="This Recipe doesn't have image"
                  className={classes.logo}
                />
              )
          }
        </section>
        <Footer literals={literals} data={getFooterData(data)} />
      </article>
    </InternalLink>
  );
};

Component.defaultProps = {
  literals: {},
  data: {},
};

Component.propTypes = {
  literals: Footer.propTypes.literals,
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    name: PropTypes.string,
    eventDate: PropTypes.string,
    preparationTime: PropTypes.string,
    difficulty: PropTypes.number,
    nIngredients: PropTypes.number,
    showName: PropTypes.bool,
  }),
};

export default Component;
