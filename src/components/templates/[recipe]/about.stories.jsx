import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import literals from '../../../../.storybook/fake_data/literals.json';
import project from '../../../../.storybook/fake_data/project.json';

import Component from './about';

storiesOf('Templates/[Recipe]/About', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component
      authorData={{
        email: 'romay.gabriel@gmail.com',
        name: literals.gabriel,
        url: literals.cv,
      }}
      literals={{
        about: 'About',
        participants: 'Participants',
      }}
      projectData={{
        description: project.description,
        name: project.name,
        participants: project.participants,
        url: project.url,
      }}
    />
  ));
