import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import LabeledCheckbox from '../labeledCheckbox.jsx';

storiesOf('Molecules/LabeledCheckbox', module)
  .addDecorator(themeDecorator(theme))
  .add('checked', () => (
    <LabeledCheckbox id="checkbox" value={true} handleChange={action('Input detected')}>
      Labeled Checkbox
    </LabeledCheckbox>
  ))
  .add('unchecked', () => (
    <LabeledCheckbox id="checkbox" value={false} handleChange={action('Input detected')}>
      Labeled Checkbox
    </LabeledCheckbox>
  ));
