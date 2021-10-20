import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../../../styles/global-styles';
import themeDecorator from '../../../../../../.storybook/decorators/themeDecorator';

import steps from '../../../../../../.storybook/fake_data/steps.json';

import Component from '.';

storiesOf('Organisms/_Recipe_/Detail/StepsList', module)
  .addDecorator(themeDecorator(theme))
  .add('without sections or description', () => <Component steps={[steps[0]]} />)
  .add('without description or items', () => <Component steps={[steps[3]]} />)
  .add('with sections, description and Markdown', () => <Component steps={[steps[1], steps[2]]} />)
  .add('without steps', () => <Component noItemsMsg="No steps required" />);
