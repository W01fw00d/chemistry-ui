import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import Component from './internal';

storiesOf('Atoms/Links/Internal', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <Component to="/">
      <ArrowBackIcon />
    </Component>
  ));
