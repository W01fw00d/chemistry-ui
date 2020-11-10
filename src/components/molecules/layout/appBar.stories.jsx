import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Typography from '../../atoms/typography';

import Component from './appBar';

storiesOf('Molecules/Layout/AppBar', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component position="sticky">
      <Typography variant="h6" color="inherit">
        Title 1
      </Typography>
      <Typography variant="h6" color="inherit">
        Title 2
      </Typography>
      <Typography variant="h6" color="inherit">
        Title 3
      </Typography>
      <Typography variant="h6" color="inherit">
        Title 4
      </Typography>
    </Component>
  ));
