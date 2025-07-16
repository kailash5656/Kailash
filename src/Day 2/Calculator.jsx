import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let res = 0;

    if (isNaN(a) || isNaN(b)) {
      res = 'Please enter valid numbers';
    } else {
      switch (operation) {
        case 'add': res = a + b; break;
        case 'subtract': res = a - b; break;
        case 'multiply': res = a * b; break;
        case 'divide': res = b !== 0 ? a / b : 'Cannot divide by zero'; break;
        default: res = 'Invalid operation';
      }
    }

    setResult(res);
  };

  return (
    <div style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        placeholder="First number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        style={{ margin: '5px' }}
      />
      <input
        type="number"
        placeholder="Second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        style={{ margin: '5px' }}
      />
      <br />
      <select value={operation} onChange={(e) => setOperation(e.target.value)} style={{ margin: '5px' }}>
        <option value="add">Add (+)</option>
        <option value="subtract">Subtract (-)</option>
        <option value="multiply">Multiply (*)</option>
        <option value="divide">Divide (/)</option>
      </select>
      <br />
      <button onClick={calculate} style={{ margin: '10px' }}>Calculate</button>
      {result !== null && <h3>Result: {result}</h3>}
    </div>
  );
}

export default App;