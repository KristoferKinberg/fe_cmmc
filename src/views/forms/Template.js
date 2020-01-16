import React from "react";
import {
  StyledFormInnerWrapper,
  StyledFormWrapper,
  StyledRegister,
  StyledWelcomeMessage,
  StyledWelcomeMessageWrapper
} from "./subViews/registerUser/StyledRegister";

/**
 * Template screen
 * @param title
 * @param text
 * @param Component
 * @returns {*}
 */
export default (title, text, Component = null) => <StyledFormWrapper>
  <StyledFormInnerWrapper>
    <div>
      <StyledRegister>
        { title }
      </StyledRegister>

      <StyledWelcomeMessageWrapper>
        <StyledWelcomeMessage>
          { text }
        </StyledWelcomeMessage>
      </StyledWelcomeMessageWrapper>

    </div>

    { Component }
  </StyledFormInnerWrapper>
</StyledFormWrapper>;
