import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FavoriteBorder as LikeIcon } from '@material-ui/icons';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import Component from './iconText';

storiesOf('Atoms/Buttons/IconText', module)
  .addDecorator(themeDecorator(theme))
  .add('With Like Icon', () => (
    <Component
      handleClick={action('IconTextButton clicked')}
      icon={<LikeIcon />}
      text="Icon Text Button"
    />
  ));
