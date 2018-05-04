import React from 'react';
import styled from 'styled-components';

const HintComponent = styled.div`
  text-align: center;
  font-size: 12px;
`;

const Hint = ({ hint }) => {
  return (
    <HintComponent>{ hint }</HintComponent>
  );
};

export default Hint;