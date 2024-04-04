import React from 'react';

const NumberRange = ({ start, end }) => {
 const numbers = [];
 for (let i = start; i <= end; i++) {
    numbers.push(i);
 }

 return (
    <div>
      <h2>Numbers from {start} to {end}</h2>
      <ul>
        {numbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
 );
};

export default NumberRange;
