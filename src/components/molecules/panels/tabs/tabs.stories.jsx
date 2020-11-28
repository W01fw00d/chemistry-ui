import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import KitchenIcon from '@material-ui/icons/Kitchen';

import Component from '.';

const tabsData = [
  {
    icon: <KitchenIcon />,
    label: 'Tab 1',
    content: 'Content of Tab 1',
  },
  {
    icon: <KitchenIcon />,
    label: 'Tab 2',
    content: 'Content of Tab 2',
  }
]

storiesOf('Molecules/Panels/Tabs', module)
  .addDecorator(StoryRouter())
  .add('default', () => (
    <Component tabsData={tabsData} />
  ));
