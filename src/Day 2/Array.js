import React from 'react'

export default function array() {
    const fruits = ["Apple","Banana","Mango","Orange"];

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Fruit List</h2>
        <ul>
            {fruits.map((fruit,index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>   
    </div>
  );
}
