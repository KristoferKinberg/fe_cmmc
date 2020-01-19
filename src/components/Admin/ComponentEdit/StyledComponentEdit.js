import styled from 'styled-components';

export const StyledComponentEdit = styled.div`
  display: flex;
  flex: 1;
  max-height: calc(100vh - 60px);
`;

export const StyledComponentArea = styled.div`
  background: #999;
  overflow: auto;
  display: flex;
  flex: 1;
  ${({ centerComponent }) => centerComponent
    ? `
      align-items: center;
      justify-content: center;
    `
    : ''
  }
`;

export const StyledSidebar = styled.div`
  background: #fff;
  height: 100%;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const StyledSidebarHeader = styled.div`
  border-bottom: 1px solid #cecece;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledSidebarHeaderElem = styled.h2`
  font-widgr: 900;
  text-transform: uppdercase;
  margin: 0;
`;

export const StyledSidebarContent = styled.div`
  overflow-y: auto;
  height: 100%;
  padding: 0 2em;
  
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1;
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #888;
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
`;

export const StyledSidebarButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledSidebarButton = styled.div`
  padding: 1em;
  border-top: 1px solid #cecece;
`;

export const StyledModal = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledModalTitle  = styled.h1`
  color: #fff;
`;

export const StyledModalLoader = styled.div`
  margin-left: 1.5em;
`;
