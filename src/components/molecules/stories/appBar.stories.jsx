import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Typography from '../../atoms/typography';

import AppBar from '../appBar';

storiesOf('Molecules/Bars/App', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <AppBar position="sticky">
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
    </AppBar>
  ));
