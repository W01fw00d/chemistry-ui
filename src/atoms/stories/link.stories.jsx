import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import Link from '../link';

storiesOf('1. Atoms|Link', module)
  .addDecorator(StoryRouter())
  .add('ArrowBackIcon', () => (
    <Link to="/">
      <ArrowBackIcon />
    </Link>
  ));
