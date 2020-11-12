import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../styles/global-styles';
import themeDecorator from '../../../.storybook/decorators/themeDecorator';

import Component from './markdownText';

storiesOf('Atoms/MarkdownText', module)
  .addDecorator(themeDecorator(theme))
  .add('italic', () => <Component id="test1" text="*Title*" />)
  .add('bold', () => <Component id="test1" text="**Title**" />);
