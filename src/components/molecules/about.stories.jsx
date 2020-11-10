import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import theme from '../../styles/global-styles';
import themeDecorator from '../../../.storybook/decorators/themeDecorator';

import itemImage from '../../../public/fake_imgs/item.jpg';

import About from './about.jsx';

storiesOf('Molecules/About', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <About
      logo={itemImage}
      authorName="Author Name"
      email="fake@email.com"
      authorUrl="https://fake.io/author-url"
      projectUrl="https://fake.io/project-url"
    />
  ));
