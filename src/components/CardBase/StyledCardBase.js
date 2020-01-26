import styled from 'styled-components';
import {antiShadow, apply200Transition, boxShadow} from "../../StyleHelpers";

export const StyledCardBase = styled.div`
  display: flex;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  position: relative;
  right: 0;
  bottom: 0;
  margin-bottom: 30px;
  overflow: hidden;
  
  ${({ isAdmin }) => isAdmin ? 'margin: 0;' : '' }
  ${({ elevated }) => elevated
    ? `
      ${ boxShadow() }
      ${ apply200Transition('right', 'bottom') }
    
      &:hover {
        cursor: pointer;
        right: -5px;
        left: -5px;
        
        ${ antiShadow() }
        ${ apply200Transition('right', 'bottom') }
      }
    `
    : ''
  }
`;
