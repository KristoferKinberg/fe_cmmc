import styled from 'styled-components';

const border = '1px solid #cecece';

export const StyledOverviewBar = styled.div`
  display: flex;
  height: 60px;
  width: 100%;
  align-items: center;
  position: relative;
  z-index: 10;
  border-top: ${border};
  border-bottom: ${border};
  margin-bottom: 30px;
`;
