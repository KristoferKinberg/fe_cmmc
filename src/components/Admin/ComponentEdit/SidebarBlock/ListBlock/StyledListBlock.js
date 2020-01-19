import styled from 'styled-components';

export const StyledListBlock = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledListBlockList = styled.div`
  border: 1px solid #cecece;
  overflow-y: scroll;
  width: 100%;
  height: 100%;

  /* width */
  ::-webkit-scrollbar {width: 10px;
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

export const StyledListBlockRow = styled.div`
  min-height: 50px;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: row;
  align-items: center;

`;
export const StyledListBlockRowComponent = styled.div`
  display: flex;
  flex: 1;
`;

export const StyledListBlockCheckbox = styled.div`
  height: 100%;
  width: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListBlockEditable = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledListBlockNoRecords = styled.div`
  padding: 20px;
  color: #555;
  font-size: .9em;
  text-align: center;
`;
