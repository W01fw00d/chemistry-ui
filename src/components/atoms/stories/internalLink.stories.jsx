import React from 'react';

import StoryRouter from 'storybook-react-router';
import { storiesOf } from '@storybook/react';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import InternalLink from '../internalLink';

storiesOf('Atoms/Links/InternalLink', module)
  .addDecorator(StoryRouter())
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <InternalLink to="/">
      <ArrowBackIcon />
    </InternalLink>
  ));
