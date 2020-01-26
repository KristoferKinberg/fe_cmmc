import React from 'react';
import {StyledAdminWrapper} from "./StyledAdminWrapper";
import Navbar from "../Navbar";

export default ({ children }) => {
  return <StyledAdminWrapper>
    <Navbar />
    { children }
  </StyledAdminWrapper>
}
