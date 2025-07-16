import React, { useState } from 'react';

export default function Grade() {
  const [name, setName] = useState('');
  const [marks, setMarks] = useState('');
  const [result, setResult] = useState('');

  const evaluateGrade = () => {
    const score = parseInt(marks);
    let grade = '';

    if (isNaN(score)) {
      grade = 'Please enter valid marks';
    } else if (score >= 90) {
      grade = 'A+';
    } else if (score >= 80) {
      grade = 'A';
    } else if (score >= 70) {
      grade = 'B';
    } else if (score >= 60) {
      grade = 'C';
    } else if (score >= 50) {
      grade = 'D';
    } else {
      grade = 'F';
    }

    setResult(`${name} has secured Grade: ${grade}`);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h2>Student Grade Evaluator</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px', padding: '6px', width: '250px' }}
      />
      <br />

      <input
        type="number"
        placeholder="Enter Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        style={{ marginBottom: '10px', padding: '6px', width: '250px' }}
      />
      <br />

      <button onClick={evaluateGrade} style={{ padding: '6px 20px' }}>
      Evaluate
      </button>

      {result && (
        <h3 style={{ marginTop: '20px', color: 'green' }}>{result}</h3>
      )}
    </div>
  );
}
