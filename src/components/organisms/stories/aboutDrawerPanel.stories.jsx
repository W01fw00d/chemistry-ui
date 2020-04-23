import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import AboutDrawerPanel from '../aboutDrawerPanel.jsx';

storiesOf('Organisms/Panel/AboutDrawer', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <AboutDrawerPanel
      logo={itemImage}
      authorName="Author Name"
      email="fake@email.com"
      authorUrl="https://fake.io/author-url"
      projectUrl="https://fake.io/project-url"
    />
  ));
