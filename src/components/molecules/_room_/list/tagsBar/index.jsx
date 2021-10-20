import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../../../atoms/layout/grid';

import TagButton from './components/tagButton';

const Component = ({ handleClick, tags }) => (
  <Grid container justifyContent="center">
    {tags.map((tag) => (
      <TagButton key={tag.id} {...tag} handleClick={handleClick} />
    ))}
  </Grid>
);

Component.defaultProps = {
  handleClick: () => {},
  tags: [],
};

Component.propTypes = {
  handleClick: PropTypes.func,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isCurrent: PropTypes.bool,
      name: PropTypes.string,
    }),
  ),
};

export default Component;
