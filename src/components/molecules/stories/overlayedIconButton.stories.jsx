import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import OverlayedIconButton from '../overlayedIconButton';

storiesOf('2. Molecules|Buttons.OverlayedIconButton', module)
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <OverlayedIconButton handleClick={action('OverlayedIconButton clicked')}>
      <ArrowBackIcon />
    </OverlayedIconButton>
  ));
