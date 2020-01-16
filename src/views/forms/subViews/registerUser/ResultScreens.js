import React from "react";
import { StyledRegisterButton } from "./StyledRegister";
import Template from "../../Template";

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
    {/*<Link to={'/admin/log_in'}>*/}
    {/*<StyledRegisterButton>*/}
      // Log in
    // </StyledRegisterButton>
  // </Link>;

  return Template('Success', 'Account successfully created! Click below to get to log in page.', renderLink());
};

/**
 * Failure screen
 * @returns {*}
 * @constructor
 */
export const FailureScreen = () => Template('Failure', 'Unfortunatley for some reason, your account couldnt not be created. Please contact an administrator for further assistance.');

/**
 * Invalid token
 * @returns {*}
 */
export const InvalidToken = () => Template('Invalid token!', 'Please contact your administrator who issued the token for further assitance.');
