import React from 'react';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const fst = require('../../assets/images/pug1.jpg');
const scd = require('../../assets/images/tower.jpg');

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  margin-bottom: 10px;
  cursor: pointer;
  height: 40px;
`;

const Cover = styled.div`
  width: 40px;
  background-position: center;
  background-size: cover;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  padding: 0 10px;
  width: 200px;
  background: ${({ theme }) => theme.darkBg};
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  font-size: 20px;
  background-color: ${({ color, theme }) => theme[color]};
  color: #fff;
`;

const Goal = ({ goal }) => {
  return (
    <Wrapper>
      <Cover style={{backgroundImage: `url(${goal.cover === 'pug1' ? fst : scd})`}} />
      <Title>{goal.title}</Title>
      <InfoBox color="warn">
        <FontAwesomeIcon icon="list-ol"/>
      </InfoBox>
      <InfoBox color="info">
        <FontAwesomeIcon icon="lightbulb"/>
      </InfoBox>
      <InfoBox color="danger">
      <FontAwesomeIcon icon="gem"/>
      </InfoBox>
    </Wrapper>
  );
};

export default Goal;