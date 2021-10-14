import React from 'react';
import PropTypes from 'prop-types';

import Grid from '../../../../atoms/layout/grid.jsx';

import TagButton from './components/tagButton.jsx';

const Component = ({ tags, handleClick }) => (
  <Grid container justifyContent="center">
    {tags.map((tag) => (
      <TagButton key={tag.id} {...tag} handleClick={handleClick} />
    ))}
  </Grid>
);

Component.defaultProps = {
  tags: [],
  handleClick: () => {},
};

Component.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      isCurrent: PropTypes.bool,
    }),
  ),
  handleClick: PropTypes.func,
};

export default Component;