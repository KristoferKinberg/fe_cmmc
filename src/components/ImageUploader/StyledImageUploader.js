import styled from 'styled';

export const StyledImageUploader = styled.div`
  position: relative;
  overflow: hidden;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: #ebebeb;
  }
`;

export const StyledImageUploaderCustomElem = styled.button`
  border: 2px solid gray;
  color: gray;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
`;