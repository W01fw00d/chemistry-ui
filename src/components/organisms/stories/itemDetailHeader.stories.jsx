import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ItemDetailAppBar from '../itemDetailHeader';

storiesOf('3. Organisms|ItemDetail.Header', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <ItemDetailAppBar name="Item Name" handleClick={action('IconButton clicked')} />
  ));
