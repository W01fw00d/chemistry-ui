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
      <Typography color="inherit" variant="h6">
        {/* TODO refactor: this component can be extracted */}
        Title 1
      </Typography>
      <Typography color="inherit" variant="h6">
        Title 2
      </Typography>
      <Typography color="inherit" variant="h6">
        Title 3
      </Typography>
      <Typography color="inherit" variant="h6">
        Title 4
      </Typography>
    </Component>
  ));
