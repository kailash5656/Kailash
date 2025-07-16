import React, { useState } from 'react';

export default function Multiplication() {
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  const renderTable = () => {
    const num = parseInt(number);
    if (isNaN(num)) return null;

    const table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(
        <li key={i}>
          {num} x {i} = {num * i}
        </li>
      );
    }

    return <ul>{table}</ul>;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Multiplication Table Generator</h2>
      <input type="number" value={number} onChange={handleChange} placeholder="Enter a number"/>
      {renderTable()}
    </div>
  );
}
