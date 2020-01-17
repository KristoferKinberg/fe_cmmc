import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '../../../node_modules/bootstrap/scss/bootstrap.scss';
import AddButton from './';

storiesOf('General.AddButton', module).add('Simple AddButton', () => (
  <AddButton/>
));
