import React from 'react';

import { storiesOf } from '@storybook/react';

import Typography from '../../atoms/typography';

import AppBar from '../appBar';

storiesOf('2. Molecules|Bars.App', module).add('default', () => (
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
