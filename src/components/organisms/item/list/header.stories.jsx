import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../styles/global-styles';

import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import authorData from '../../../../../.storybook/fake_data/author.json';
import projectData from '../../../../../.storybook/fake_data/project.json';
import tags from '../../../../../.storybook/fake_data/tags.json';

import escapingBoredomTitleLogo from '../../../../../public/escaping-boredom-title-logo.png';

import ItemListHeader from './header';

storiesOf('Organisms/[Item]/List/Header', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemListHeader
      authorData={authorData}
      projectData={projectData}
      logo={escapingBoredomTitleLogo}
      tags={tags}
      searchValue="Search Value"
      handleChange={action('Input detected')}
      handleClick={action('IconButton clicked')}
    />
  ));
