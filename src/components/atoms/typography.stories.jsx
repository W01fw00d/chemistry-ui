import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../styles/global-styles';
import themeDecorator from '../../../.storybook/decorators/themeDecorator';

import Typography from './typography';

storiesOf('Atoms/Typography', module)
  .addDecorator(themeDecorator(theme))
  .add('Title', () => <Typography variant="h1">Title</Typography>)
  .add('Body Text', () => <Typography variant="body1">Body text</Typography>);
