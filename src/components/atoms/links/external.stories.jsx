import React from 'react';

import { storiesOf } from '@storybook/react';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import Component from './external';

storiesOf('Atoms/Links/External', module)
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <Component to="https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US">
      <ArrowBackIcon />
    </Component>
  ));
