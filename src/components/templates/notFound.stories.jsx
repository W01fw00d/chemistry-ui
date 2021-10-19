import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import Component from './notFound';

storiesOf('Templates/NotFound', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      literals={{
        goHome: 'Go to Home Page',
        notFound: 'Not Found Message',
      }}
    />
  ));
