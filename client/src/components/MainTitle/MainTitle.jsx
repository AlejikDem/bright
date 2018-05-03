import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const Greeting = styled.h2`
  font-size: ${props => props.theme.greeting};
`;

const Logo = styled.h1`
  font-size: ${props => props.theme.mainTitle};
`;

const MainTitle = () => {
  return (
    <TitleWrapper>
      <Greeting>Welcome to</Greeting>
      <Logo>Bright Goals</Logo>
    </TitleWrapper>
  );
};

export default MainTitle;