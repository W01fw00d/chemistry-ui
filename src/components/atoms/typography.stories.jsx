import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../styles/global-styles';
import themeDecorator from '../../../.storybook/decorators/themeDecorator';

import Component from './typography';

storiesOf('Atoms/Typography', module)
  .addDecorator(themeDecorator(theme))
  .add('Title', () => <Component variant="h1">Title</Component>)
  .add('Body Text', () => <Component variant="body1">Body text</Component>);
