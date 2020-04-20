import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';
import allLiterals from '../../../../.storybook/fake_data/literals.json';

import ItemDetailButtonsRow from '../itemDetailButtonsRow';

const literals = {
  like: allLiterals.like,
  comment: allLiterals.comment,
};

storiesOf('Organisms/ItemDetail/ButtonsRow', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => (
    <ItemDetailButtonsRow
      literals={literals}
      likeCount={3}
      handleClick={action('IconButton clicked')}
    />
  ));
