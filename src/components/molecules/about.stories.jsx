import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../styles/global-styles';
import themeDecorator from '../../../.storybook/decorators/themeDecorator';

import itemImage from '../../../public/fake_imgs/item.jpg';

import Component from './about.jsx';

storiesOf('Molecules/About', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component
      authorName="Author Name"
      authorUrl="https://fake.io/author-url"
      email="fake@email.com"
      logo={{
        height: 360,
        src: itemImage,
        width: 640,
      }}
      projectName="Project Name"
      projectUrl="https://fake.io/project-url"
    />
  ));
