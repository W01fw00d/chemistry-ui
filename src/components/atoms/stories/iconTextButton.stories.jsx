import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FavoriteBorder as LikeIcon } from '@material-ui/icons';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import IconTextButton from '../iconTextButton';

storiesOf('1. Atoms|Buttons.IconTextButton', module)
  .addDecorator(themeDecorator(theme))
  .add('With Like Icon', () => (
    <IconTextButton
      icon={<LikeIcon />}
      text="Icon Text Button"
      handleClick={action('IconTextButton clicked')}
    />
  ));
