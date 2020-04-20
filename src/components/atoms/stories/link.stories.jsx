import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import Link from '../link';

storiesOf('1. Atoms|Link', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <Link to="/">
      <ArrowBackIcon />
    </Link>
  ));
