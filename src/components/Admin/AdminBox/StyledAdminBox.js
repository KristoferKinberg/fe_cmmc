import styled from "styled-components";

const headerColor = '#07b2db';

export const StyledBox = styled.div`
  width: ${({ width }) => width ? width : '100%' };
  margin-bottom: 20px;
  margin: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
`;

export const StyledBoxHeader = styled.div`
  background: ${headerColor};
  height: 60px;
  width: 100%;
  border-top: 1px solid #bbb;
  border-left: 1px solid #bbb;
  border-right: 1px solid #bbb;
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const StyledBoxHeaderTitle = styled.span`
  color: #fff;
  font-weight: bold;
  font-size: 1.2em;
`;

export const StyledBoxBody = styled.div`
  background: #fff;
  border: 1px solid #bbb;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  padding-top: 20px;
`;

export const StyledHeader = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  color: #444;
`;

export const StyledBody = styled.div`
`;
