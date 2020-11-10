import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './footer';

storiesOf('Molecules/Layout/Footer', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <Component>Footer Bar</Component>);
