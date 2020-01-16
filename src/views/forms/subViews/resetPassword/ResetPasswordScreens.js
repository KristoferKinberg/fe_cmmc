import React from 'react';
import Template from "../../Template";
import {StyledRegisterButton} from "../registerUser/StyledRegister";

export const SuccessScreen = () => {
  const renderLink = () => <p>:D</p>
    // <Link to={'/admin/log_in'}>
    // <StyledRegisterButton>
    //   Log in
    // </StyledRegisterButton>
  // </Link>;

  return Template('Email sent', 'An email has been sent to the supplied address. Please check your inbox and follow the link to reset your password.', renderLink());
};
