// FocusInput.jsx
import React, { useRef } from 'react';

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus(); // Focus on the first input
  };

  return (
    <div style={styles.container}>

      <input
        ref={inputRef}
        type="text"
        placeholder="Click button to focus me"
        style={styles.input}
      />

      <input
        type="text"
        placeholder="Not focusing button"
        style={styles.input}
      />

      <button onClick={handleFocus} style={styles.button}>
        Focus Input
      </button>
    </div>
  );
};

const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    textAlign: 'center'
  },
  title: {
    marginBottom: '20px'
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px',
    backgroundColor: '#2196f3',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '100%'
  }
};

export default FocusInput;
