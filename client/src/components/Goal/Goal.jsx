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
  position: relative;
  width: 40px;
  font-size: 20px;
  background-color: ${({ color, theme }) => theme[color]};
  color: #fff;
`;

const InfoBoxInner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:hover~div {
    display: block;
  }
`;

const ToolTip = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 100%;
  z-index: 2;
  width: 200px;
  margin-top: 5px;
  margin-left: -2px;
  padding: 10px 10px;
  background-color: rgba(0, 0, 0, 0.7);
  font-size: 14px;

  &:before {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 0;
    width: 0;
    height: 0;
    border-bottom: 10px solid rgba(0, 0, 0, 0.7);
    border-right: 10px solid transparent;
  }

  div:not(:last-child) {
    margin-bottom: 5px; 
  }
`;

const Goal = ({ goal }) => {
  return (
    <Wrapper>
      <Cover style={{backgroundImage: `url(${goal.cover === 'pug1' ? fst : scd})`}} />
      <Title>{goal.title}</Title>
      <InfoBox color="warn">
        <InfoBoxInner>
          <FontAwesomeIcon icon="list-ol"/>
        </InfoBoxInner>
        <ToolTip>
          <div>1. Step</div>
          <div>2. Step</div>
          <div>3. Step</div>
        </ToolTip>
      </InfoBox>
      <InfoBox color="info">
        <InfoBoxInner>
          <FontAwesomeIcon icon="lightbulb"/>
        </InfoBoxInner>
        <ToolTip>
          <div>1. Advantage</div>
          <div>2. Advantage</div>
          <div>3. Advantage</div>
        </ToolTip>
      </InfoBox>
      <InfoBox color="danger">
        <InfoBoxInner>
          <FontAwesomeIcon icon="gem"/>
        </InfoBoxInner>
        <ToolTip>Prize</ToolTip>
      </InfoBox>
    </Wrapper>
  );
};

export default Goal;