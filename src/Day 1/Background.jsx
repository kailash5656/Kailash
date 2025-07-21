import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("white");

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
      <div className='App' style={{ backgroundColor: bgColor, height:'100vh' }}>
    <h1 style={{fontWeight: "bold"}}>Click to Change Background</h1>
    <div style={{ marginTop: '20px' }}>
      <button onClick={() => changeColor("lightblue")}>Light Blue</button>
      <button onClick={() => changeColor("lightgreen")} style={{ marginLeft:'10px'}}>Light Green</button>
      <button onClick={() => changeColor("white")} style={{marginLeft:'10px'}}>Reset</button>
    </div>
  </div>
  );
}

export default App;
