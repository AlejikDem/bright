import React from 'react';

import Goal from '../Goal/Goal';

const goals = [1,2,3,4];

const Goals = () => {
  return (
    <div>
      <div>Goals</div>
      {goals.map(goal => (
        <Goal key={goal} goal={goal} />
      ))}
    </div>
  );
};

export default Goals;