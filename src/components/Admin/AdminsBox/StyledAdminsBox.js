import styled from 'styled-components';

export const StyledAdminContainer = styled.div`
  height: 200px;
  overflow: auto;
`;

export const StyledAdminsRow = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #cecece;
  font-size: .9em;  
  
  &:last-child {
    border: none;
  }
`;

export const StyledInvitedButtons = styled.div`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
