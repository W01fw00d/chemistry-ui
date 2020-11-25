import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import Component from './notFound';

storiesOf('Templates/NotFound', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      literals={{
        notFound: 'Not Found Message',
        goHome: 'Go to Home Page',
      }}
    />
  ));
