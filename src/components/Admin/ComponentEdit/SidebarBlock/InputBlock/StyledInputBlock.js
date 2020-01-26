import styled from 'styled-components';

export const StyledInput = styled.input`
    width: 100%;
    font-size: .9em;
    color: #333;
    height: 40px;
    padding: 0 10px;

    ${({ disabled }) => disabled ? 'color: #777' : '' }
`;
