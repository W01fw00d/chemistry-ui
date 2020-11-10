import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../styles/global-styles';
import themeDecorator from '../../../../../.storybook/decorators/themeDecorator';
import tags from '../../../../../.storybook/fake_data/tags.json';

import ItemListTagsBar from './tagsBar';

storiesOf('Molecules/[Item]/List/TagsBar', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <ItemListTagsBar tags={tags} handleClick={action('IconButton clicked')} />);
