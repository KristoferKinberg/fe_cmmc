import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`;

export const StyledMainBar = styled.div`
  padding: 0 10px;
  background: #333;
  display: flex;
  justify-content: space-between;
  position:relative;
`;

export const StyledSubBar = styled.div`
  height: ${({ isActive }) => isActive ? '40px;' : '0' }
  background: #555;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: -40px;
`;

export const StyledLinkWrapper = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

export const StyledLink = styled.span`
  color: #ebebeb;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: .9em;
  letter-spacing: .2em;
`;

export const StyledSubLinkWrapper = styled.div`
  height: 100%;
  padding: 0 15px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: #777;
  }
`;

export const StyledSubLink = styled.span`
  color: #ebebeb;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: .7em;
  letter-spacing: .2em;`;

export const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
  display: flex
`;

export const StyledIconWrapper = styled.div`
  width: 65px;
  display: relative;
  padding: 10px;
  cursor: pointer;
`;

export const StyledColumn = styled.div`
  display: flex;
  ${({ width }) => width ? `width: ${width}` : 'flex: 1' };
  align-items: center;
  justify-content: ${({ align }) => align !== 'right' ? 'flext-start' : 'flex-end' }
`;

export const StyledTitle = styled.h4`
  color: #fff;
`;
