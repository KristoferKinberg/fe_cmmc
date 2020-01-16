import React from 'react';
import { X } from 'react-feather';
import {StyledCloseButton} from "./StyledCloseButton";

export default ({ callback, id }) => {
  const buttonClick = () => callback(id);

  return <StyledCloseButton onClick={buttonClick} >
    <X/>
  </StyledCloseButton>
}
