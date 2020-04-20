import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import TextButton from '../textButton';

storiesOf('Atoms/Buttons/TextButton', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <TextButton handleClick={action('TextButton clicked')}>Text Button</TextButton>
  ));
