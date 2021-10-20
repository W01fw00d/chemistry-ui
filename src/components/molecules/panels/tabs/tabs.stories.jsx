import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import { Box, Typography } from '@material-ui/core';
import KitchenIcon from '@material-ui/icons/Kitchen';

import Component from '.';

const data = [
  {
    content: (
      <Box p={3}>
        {/* TODO refactor: this component can be extracted */}
        <Typography>Contents of Tab 1</Typography>
      </Box>
    ),
    icon: <KitchenIcon />,
    label: 'Tab 1',
  },
  {
    content: (
      <Box p={3}>
        <Typography>Contents of Tab 2</Typography>
      </Box>
    ),
    icon: <KitchenIcon />,
    label: 'Tab 2',
  },
];

storiesOf('Molecules/Panels/Tabs', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Component data={data} />);
