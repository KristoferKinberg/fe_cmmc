import styled from 'styled-components';
import {DANGER, DISABLED, NEUTRAL, PRIMARY, SUCCESS, WARNING} from "../../constants/constants";

const generateThemeObject = (primary, secondary) => ({
  primary: '',
  secondary: '',
});

const success = generateThemeObject('#4CCB5E', '#81DA8E');
const warning = generateThemeObject('#FFB62F', '#FFD382');
const danger = generateThemeObject('#CD5C5C', '#DC8C8C');
const primary = generateThemeObject('#5A5AFF', '#8B8BFF');
const neutral = generateThemeObject('#777', '#999');
const disabled = generateThemeObject('#777', '#bebebe');

const white = '#fff';

export const ButtonIcon = styled.div`
  right: -  1px;
  bottom: -1px;
`;

export const StyledButton = styled.button`
  padding: 0 10px;
  border: 3px solid #777;
  min-height: 3em;
  font-weight: 900;
  color: #555;
  border-radius: 4px;
  cursor: pointer;
  background: #fff;
  outline: 0;
  position: relative;

  &:focus {
    outline: 0;
  }
  
  &:active {
    right: -1px;
    bottom: -1px;
  }
  
  ${({ theme }) => themes[theme]}
  ${({ fullWidth }) => fullWidth ? 'width: 100%;' : '' }
  ${({ transparent }) => transparent 
    ? `
      &.transparent:not(:hover){
        background: transparent!important;
      }` 
    : '' 
  }
`;

const templateStyles = ({ primary, secondary }) => `
    border-color: ${primary};
    color: ${primary};
    background: ${secondary};
`;

const transition = `
  transition: all 200ms;
  -o-transition: all 200ms;
  -moz-transition: all 200ms;
  -webkit-transition: all 200ms;
`;

const generateStyles = ({ primary, secondary }) => `
    border-color: ${ primary };
    color: ${ primary };
    ${ transition }

    &:hover {
      background: ${ primary };
      color: ${white}
      ${ transition }
    }

    &:active {
      background: ${ secondary };
      ${ transition }
    }

    &:focus {
      outline:0;
    }
`;

const disabledStyles = `
  ${templateStyles(disabled)}
  ${ transition }

  &:hover {
    cursor: not-allowed;
  }
    
  &:focus {
    outline: 0;
  }
  
  &:active {
    right: -1px;
    bottom: -1px;
  }
`;

const themes = {
  [SUCCESS]: generateStyles(success),
  [WARNING]: generateStyles(warning),
  [DANGER]: generateStyles(danger),
  [PRIMARY]: generateStyles(primary),
  [NEUTRAL]: generateStyles(neutral),
  [DISABLED]: disabledStyles,
};
