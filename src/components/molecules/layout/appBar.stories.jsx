import React from 'react';
import PropTypes from 'prop-types';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Typography from '../../atoms/typography';

import Component from './appBar';

const CustomTypography = ({ children }) => (
  <Typography color="inherit" variant="h6">
    {children}
  </Typography>
);
CustomTypography.propTypes = {
  children: PropTypes.string.isRequired,
};

storiesOf('Molecules/Layout/AppBar', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component position="sticky">
      <CustomTypography>Title 1</CustomTypography>
      <CustomTypography>Title 2</CustomTypography>
      <CustomTypography>Title 3</CustomTypography>
      <CustomTypography>Title 4</CustomTypography>
    </Component>
  ));
