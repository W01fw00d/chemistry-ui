import React from 'react';

import { storiesOf } from '@storybook/react';

import Typography from '../typography';

storiesOf('1. Atoms|Typography', module).add('h6', () => (
  <Typography variant="h6">Test</Typography>
));
