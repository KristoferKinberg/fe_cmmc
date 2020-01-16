import {StyledRegisterButton} from "../registerUser/StyledRegister";
import Template from "../../Template";
import React from "react";

/**
 * Success screen
 * @returns {*}
 * @constructor
 */
export const SuccessScreen = () => {
  /**
   * Renders a link to log in
   * @returns {*}
   */
  const renderLink = () => <p>:D</p>
    // <Link to={'/admin/log_in'}>
    // <StyledRegisterButton>
    //   Log in
    // </StyledRegisterButton>
  // </Link>;

  return Template('Success', 'Password successfully updated! Click below to get to log in page.', renderLink());
};
