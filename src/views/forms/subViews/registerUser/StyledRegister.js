import styled from 'styled-components';

export const StyledRegisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const StyledImageWrapper = styled.div`
  width: 35%;
  height: 100%;
  overflow: hidden;
  top: 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  max-width: 33%;
  flex-direction: column;
  border-right: 1px solid #999;
`;

export const StyledFormWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 100%;
`;

export const StyledFormInnerWrapper = styled.div`
  max-width: 400px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  height: 100%;
  position: absolute;
`;

export const StyledImageIcon = styled.img`
  margin-bottom: 50px;
  position: relative;
  height: 175px;
  z-index: 3;
`;

export const StyledWelcomeMessageWrapper = styled.div`
  margin: 40px 0 20px 0;
`;

export const StyledWelcomeMessage = styled.span`
  font-size: .8em;
  color: #555;
`;

export const StyledWelcome = styled.h2`
    position: relative;
    font-size: 4em;
    margin: 0;
    font-family: 'GOODDP'!important;
    z-index: 2;
    color: #fff;
    text-align: center;
    text-shadow: 3px 3px 0 #860303, -1px -1px 0 #860303, 1px -1px 0 #860303, -1px 1px 0 #860303, 1px 1px 0 #00b2b8;
`;

export const StyledRegister = styled.h3`
  font-weight: 900;
  text-transform: uppercase;
  color: #333;
`;

export const StyledRegisterButton = styled.button`
  background: #1b4ab3;
  height: 60px;
  text-align: center;
  font-weight: bold;
  border: 0;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  cursor: pointer;
`;

export const StyledOverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.4);
  z-index: 1;
`;

export const StyledErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  flex-direction: column;
`;
