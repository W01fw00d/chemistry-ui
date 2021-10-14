import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../../../styles/global-styles';
import themeDecorator from '../../../../../../.storybook/decorators/themeDecorator';
import tags from '../../../../../../.storybook/fake_data/tags.json';

import Component from '.';

storiesOf('Molecules/[Room]/List/TagsBar', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <Component tags={tags} handleClick={action('IconButton clicked')} />);
