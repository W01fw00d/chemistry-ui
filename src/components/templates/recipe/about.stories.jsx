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
      literals={{
        about: 'About',
        participants: 'Participants',
      }}
      authorData={{
        name: literals.gabriel,
        email: 'romay.gabriel@gmail.com',
        url: literals.cv,
      }}
      projectData={{
        description: project.description,
        url: 'https://github.com/W01fw00d/chemistry-ui/blob/master/README.md',
        participants: project.participants,
      }}
    />
  ));
