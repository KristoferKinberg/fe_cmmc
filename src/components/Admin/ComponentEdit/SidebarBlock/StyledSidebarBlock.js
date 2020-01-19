import styled from 'styled-components';

export const StyledSidebarBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 0;
  border-bottom: 1px solid #cecece;
`;

export const StyledSidebarBlockHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: .5em;
`;

export const StyledSidebarBlockHeaderTitle = styled.div`
  font-weight: 900;
  color: #444;
  font-size: 1.2em;
`;

export const StyledSidebarBlockContent = styled.div`
  width: 100%;
`;
