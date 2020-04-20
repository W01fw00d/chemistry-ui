import React from 'react';

import { storiesOf } from '@storybook/react';

import theme from '../../../styles/global-styles';
import themeDecorator from '../../../../.storybook/decorators/themeDecorator';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import Image from '../image';

storiesOf('Atoms/Image', module)
  .addDecorator(themeDecorator(theme))
  .add('default', () => <Image src={itemImage} />);
