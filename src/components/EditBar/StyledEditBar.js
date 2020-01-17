import styled from 'styled-components';
import {Edit2, Plus, Trash2} from "react-feather";

export const StyledEditBar = styled.div`
  max-width: 100px;
  color: #333;
  border-radius: 20px;
  padding: 5px 5px;
  
  ${({ hasBorder }) => hasBorder
    ? 'border: 2px solid #333;'
    : ''
  }
`;

export const StyledEditBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: around;
  flex-direction: row;
`;

export const StyledEditBarIcon = `
  cursor: pointer;
  margin: 0 5px;

  &:hover {
    opacity: .75;
  }
`;

export const StyledPlusIcon = styled(Plus)(StyledEditBarIcon);
export const StyledEditIcon = styled(Edit2)(StyledEditBarIcon);
export const StyledTrashIcon = styled(Trash2)(StyledEditBarIcon);

