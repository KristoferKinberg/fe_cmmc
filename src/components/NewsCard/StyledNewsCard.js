import styled from 'styled-components';

export const StyledNewsCard = styled.div`
  height: 450px;
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

export const StyledNewsCardBg = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StyledNewsCardBgImage = styled.image`
  height: 100%;
  margin-left: 50%;
  transform: translateX(-50%);
`;

export const StyledNewsCardContent = styled.div`
  position: relative;
  z-index: 2;
  height: 40%;
  width: 100%;
  padding-top: 2em;
  
  p, span, strong {
    color: #fff!important;
  }
`;

export const StyledNewsCardContentCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: -moz-linear-gradient(top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.65) 100%);
  background: -webkit-linear-gradient(top, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
  background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
`;

export const StyledNewsCardContainer = styled.div`
  position: relative;
  z-index: 2;
  padding: 0 2em 2em 2em;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const StyledNewsCardTitle = styled.h5`
  text-transform: uppercase;
  font-size: .9em;
  margin-bottom: 0;
  font-weight: 900;
  color: #fff;
`;

export const StyledNewsCardDateContainer = styled.div`
  margin-bottom: .75em;
`;

export const StyledNewsCardDate = styled.div`
  font-size: .75em;
  color: #fff;
`;

export const StyledNewsCardTextContianer = styled.span`
  font-size: .85em;
  line-height: 1.4em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const StyledNewsCardText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  color: #fff;
`;
