import styled from "styled-components";
import {applyTransition, useMediaMax} from "../../StyleHelpers";
import {TABLET} from "../../constants/constants";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1000;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4em;
  overflow: auto;
  background: rgba(0,0,0,0);
  
  ${ applyTransition(200, 'opacity', 'z-index', 'background') }
  
  ${useMediaMax(TABLET)`
    display: block;
    top: 0;
    overflow: auto;
    left: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    ${ applyTransition(200, 'opacity', 'z-index', 'background') }
  `}

  ${({ isActive }) => isActive 
    ? `
      opacity: 1;
      z-index: 9999;
      background: rgba(0,0,0,.75);
  
      ${ applyTransition(200, 'opacity', 'z-index', 'background') }
      `
    : ''}
  `;

export const StyledModalContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1000px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${useMediaMax(TABLET)`display: block;`}
  ${({ isActive }) => isActive
    ? `
      opacity: 1;
      z-index: 9999;
      background: rgba(0,0,0,.75);
    `
    : ''
  }
`;

export const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const StyledCloseButtonWrapper = styled.div`
  top: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  
  ${useMediaMax(TABLET)`position: fixed;`}
`;
