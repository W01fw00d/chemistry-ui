import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import allLiterals from '../../../../.storybook/fake_data/literals.json';

import ItemDetailButtonsRow from '../itemDetailButtonsRow';

const literals = {
  like: allLiterals.like,
  comment: allLiterals.comment,
};

storiesOf('3. Organisms|ItemDetail.ButtonsRow', module).add('default', () => (
  <ItemDetailButtonsRow
    literals={literals}
    likeCount={3}
    handleClick={action('IconButton clicked')}
  />
));
