import React from 'react';
import styled from 'styled-components';

const Greeting = styled.h2``;
const Logo = styled.h1``;

const MainTitle = () => {
  return (
    <div>
      <Greeting>Welcome to</Greeting>
      <Logo>Bright Goals</Logo>
    </div>
  );
};

export default MainTitle;