import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import Component from './loading';

storiesOf('Templates/Loading', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Component />);
