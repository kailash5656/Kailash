import React from 'react';

export default function ShowObject() {

  const person = {
    name: 'Kailash',
    age: 19,
    city: 'Okhaldhunga'
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>City: {person.city}</p>
    </div>
  );
}
