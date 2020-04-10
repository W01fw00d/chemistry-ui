import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import OverlayedIconButton from '../overlayedIconButton';

storiesOf('2. Molecules|Buttons.OverlayedIconButton', module).add('ArrowBackIcon', () => (
  <OverlayedIconButton handleClick={action('OverlayedIconButton clicked')}>
    <ArrowBackIcon />
  </OverlayedIconButton>
));
