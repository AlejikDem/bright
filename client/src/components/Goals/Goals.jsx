import React from 'react';
import styled from 'styled-components';

import Goal from '../Goal/Goal';

const goals = [
  {
    id: 0,
    cover: 'pug1',
    title: 'Be Cool',
  },
  {
    id: 1,
    cover: 'pug2',
    title: 'Be Very Cool',
  },
  {
    id: 3,
    cover: 'pug1',
    title: 'Buy milk',
  }
];

const Title = styled.div`
  font-size: ${({ theme }) => theme.pageTitle};
  text-align: center;
  margin-bottom: 15px;
`;

const Goals = () => {
  return (
    <div>
      <Title>Your Active Goals</Title>
      {goals.map(goal => (
        <Goal key={goal.id} goal={goal} />
      ))}
    </div>
  );
};

export default Goals;