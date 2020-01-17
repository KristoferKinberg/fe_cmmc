import styled from 'styled-components';

export const StyledComponentOverview = styled.div`
  width: 100%;
  padding: 1em;
  max-width: 1100px;
  margin: 0 auto;
`;

export const CompOverviewHeader = styled.div`
  margin: 3em 0 1em;
  justify-content: space-between;
  display: flex;
`;

export const HeaderTitle = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  color: #444;
`;

export const StyledLoadingScreen = styled.div`
    position: fixed;
    flex-direction: column;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.75);
`;

export const StyledComponentWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3em;
`;

export const StyledOverviewComponent = styled.div`
  width: 100%;
  margin-bottom: 1em;
  position: relative;
`;

export const StyledOverviewStatusBar = styled.div`
  position: absolute;
  padding: 10px;
  z-index: 1;
`;
