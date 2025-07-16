import React from 'react';

export default function Merge() {
  const array1 = ['apple', 'banana', 'cherry'];
  const array2 = ['date', 'elderberry', 'fig'];

  // Merge arrays using spread operator
  const mergedArray = [...array1, ...array2];

  return (
    <div>
      <h2>Merged Array:</h2>
      <ul>
        {mergedArray.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
