import React from 'react';
import styled from 'styled-components';

const goalImg = require('../../assets/images/goal.png');

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  height: 40px;
`;

const Cover = styled.div`
  width: 40px;
`;

const Title = styled.div`
  font-size: 18px;
  padding: 0 10px;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  font-size: 20px;
  background-color: ${({ color, theme }) => theme[color]};
  color: #fff;
`;

const Goal = ({ goal }) => {
  return (
    <Wrapper>
      <Cover>
        <img src={goalImg} alt="" />
      </Cover>
      <Title>Title</Title>
      <InfoBox color="warn">S</InfoBox>
      <InfoBox color="info">A</InfoBox>
      <InfoBox color="danger">P</InfoBox>
    </Wrapper>
  );
};

export default Goal;