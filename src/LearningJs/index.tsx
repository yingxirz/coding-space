import React from 'react';

const sumAll = () => {
  let sum: number = 0;
  for (let i = 0; i <= 100; i++) {
    sum += i;
  }
  return (
    <div>
      <h1>Result:{sum}</h1>
    </div>
  );
};

export default sumAll;
