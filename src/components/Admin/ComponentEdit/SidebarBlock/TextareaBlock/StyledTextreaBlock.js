import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: .9em!important;
  color: #333;
  min-height: 80px;
  padding: 5px 10px;

  ${({ disabled }) => disabled ? 'color: #777;' : '' }
`;