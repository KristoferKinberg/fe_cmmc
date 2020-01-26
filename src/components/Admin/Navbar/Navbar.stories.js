import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Navbar from "./Navbar";
import ReduxWrapper from "../../../helpers/ReduxWrapper";

const Wrapper = ({ children }) =>
  <div>
    { children }
  </div>;


storiesOf('Admin.Navbar', module)
  .addDecorator(ReduxWrapper)
  .add('Navbar', () => <Wrapper>
    <Navbar />
  </Wrapper>);
