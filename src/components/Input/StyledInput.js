import styled from "styled-components";

const labelColor = '#1b4ab3';
const borderColor = '#4069c5';
const invalidColor = '#ff4852';

const getColor = isValid => isValid === true || isValid === null
  ? borderColor
  : invalidColor;

const getLabelColor = isValid => isValid === true || isValid === null
  ? labelColor
  : invalidColor;

const getActiveStyles = (isActive, isValid, disabled) => {
  const color = disabled
    ? '#cecece'
    : getColor(isValid);

  return isActive
    ? `2px solid ${color}`
    : `5px solid ${color}`;
}

const getActiveLabelStyles = isActive => isActive
  ? '-50px'
  : '0';

const disabledStyle = (trueVal, falseVal) => ({ disabled }) => disabled
  ? trueVal
  : falseVal;

export const StyledInputWrapper = styled.div`
  height: 60px;
  width: 100%;
  border: ${({ isActive, isValid = true, disabled }) => getActiveStyles(isActive, isValid, disabled)};
  position: relative;
  margin-top: 40px;
  transition: border 200ms;
`;

export const StyledInput = styled.input`
  border: 0;
  background: ${disabledStyle('#e4e4e4', 'transparent')};
  width: 100%;
  outline: 0;
  height: 100%;
  z-index: 3;
  position: relative;
  padding: 0 10px;
  text-align: center;
  color: ${disabledStyle('#999', '#555')};
  font-weight: 900;
`;

export const StyledLabelWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  top: 0;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const StyledLabel = styled.label`
  font-weight: 900;
  color: ${({isValid}) => getLabelColor(isValid)}
  margin: 0;
  position: relative;
  top: ${({ isActive }) => getActiveLabelStyles(isActive)};
  
  transition: top 200ms;
`;

export const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledError = styled.span`
  margin: 0;
  font-size: .85em;
  color: ${invalidColor}
`;
