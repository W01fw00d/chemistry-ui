import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import ItemDetailAppBar from '../itemDetailHeader';

storiesOf('3. Organisms|ItemDetail.Header', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemDetailAppBar name="Item Name" handleClick={action('IconButton clicked')} />
  ));
