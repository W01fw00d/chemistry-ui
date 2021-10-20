import React from 'react';
import PropTypes from 'prop-types';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import { Box, Typography } from '@material-ui/core';
import KitchenIcon from '@material-ui/icons/Kitchen';

import Component from '.';

const CustomBox = ({ children }) => (
  <Box p={3}>
    <Typography>{children}</Typography>
  </Box>
);
CustomBox.propTypes = {
  children: PropTypes.string.isRequired,
};

const data = [
  {
    content: <CustomBox>Contents of Tab 1</CustomBox>,
    icon: <KitchenIcon />,
    label: 'Tab 1',
  },
  {
    content: <CustomBox>Contents of Tab 2</CustomBox>,
    icon: <KitchenIcon />,
    label: 'Tab 2',
  },
];

storiesOf('Molecules/Panels/Tabs', module)
  .addDecorator(StoryRouter())
  .add('default', () => <Component data={data} />);
