import React from 'react';

import { storiesOf } from '@storybook/react';

import itemImage from '../../../../public/fake_imgs/item.jpg';

import Image from '../image';

storiesOf('1. Atoms|Image', module).add('default', () => <Image src={itemImage} />);
