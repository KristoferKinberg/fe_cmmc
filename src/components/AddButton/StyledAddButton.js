import styled from "styled-components";
import {apply200Transition} from "../../StyleHelpers";

export const StyledAddButton = styled.button`
  border-radius: 50%;
  padding: 5px;
  overflow: hidden;
  border: 3px solid #555;
  color: #555;
  cursor: pointer;
  position: relative;
  top: 0;
  left: 0;

  ${apply200Transition('background, border-color, color, top, left')}

  &:hover {
    background: #56a951;
    border-color: #56a951;
    color: #fff;

    ${apply200Transition('background, border-color, color')}
  }
  
  &:active {
    background: #77cc72;
    border-color: #77cc72;
    left: 2px;
    top: 2px;

    ${apply200Transition('background, border-color, color')}
  }
`;
