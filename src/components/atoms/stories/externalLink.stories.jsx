import React from 'react';

import { storiesOf } from '@storybook/react';

import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';

import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import theme from '../../../styles/global-styles';

import ExternalLink from '../externalLink';

storiesOf('Atoms/Links/ExternalLink', module)
  .addDecorator(themeDecorator(theme))
  .add('ArrowBackIcon', () => (
    <ExternalLink to="https://www.linkedin.com/in/gabriel-romay-machado-40050a114/?locale=en_US">
      <ArrowBackIcon />
    </ExternalLink>
  ));
