import React, { useState } from 'react';

export default function LiftingState({ onTextChange }) {
  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Lifting State Example</h2>
      <label style={styles.label}>Enter Text:</label>
      <input
        type="text"
        placeholder="Type something..."
        onChange={handleChange}
        style={styles.input}
      />
    </div>
  );
}

const styles = {
  container: {
    padding: '30px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    maxWidth: '350px',
    margin: '50px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontWeight: 'bold',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
    fontWeight: '600',
  },
  input: {
    padding: '10px',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #aaa',
  },
};
