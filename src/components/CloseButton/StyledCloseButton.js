import styled from 'styled-components';
import {apply200Transition} from "../../StyleHelpers";


const transition = `
  transition: all 200ms;
  -o-transition: all 200ms;
  -moz-transition: all 200ms;
  -webkit-transition: all 200ms;
`;

export const StyledCloseButton = styled.button`
  cursor: pointer;
  height: 30px;
  width: 30px;
  background: #bc3a3a;
  color: #fff;


  ${ apply200Transition('background') }

  &:hover {
    background: #c96161;
    ${ apply200Transition('background') }
  }

  &:active {
    background: #832828;
    ${ apply200Transition('background') }
  }
`;
