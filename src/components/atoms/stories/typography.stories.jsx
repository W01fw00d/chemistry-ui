import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Typography from '../typography';

storiesOf('1. Atoms|Typography', module)
  .addDecorator(themeDecorator(theme))
  .add('h6', () => <Typography variant="h6">Test</Typography>);
