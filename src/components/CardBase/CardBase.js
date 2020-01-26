import React from 'react';
import {StyledCardBase} from './StyledCardBase';

export default ({ content, onClick, elevated = true, clickable = false, maxWidth, isAdmin, styles }) => {
  /**
   * On click event handler
   * @returns {null}
   * @private
   */
  const _onClick = () => onClick && clickable
    ? onClick()
    : null;

  return <StyledCardBase
    onClick={_onClick}
    style={styles}
  >
    { content }
  </StyledCardBase>
};
