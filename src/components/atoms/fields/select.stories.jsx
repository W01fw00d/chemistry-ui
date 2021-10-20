import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import Component from './select';

storiesOf('Atoms/Fields/Select', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <Component
      handleChange={action('Select click detected')}
      options={[
        { id: 0, text: 'Option 1' },
        { id: 1, text: 'Option 2' },
      ]}
      value={0}
    />
  ));
