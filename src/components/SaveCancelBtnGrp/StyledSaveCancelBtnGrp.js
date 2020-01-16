import styled from 'styled-components';

export const StyledSaveCancelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: ${({ usePadding = true }) => usePadding ? '10px' : '10px 0' };
`;

export const StyledSaveCancelBtnWrp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${({ fullSize }) => fullSize ? '100%' : '160px' }
`;
