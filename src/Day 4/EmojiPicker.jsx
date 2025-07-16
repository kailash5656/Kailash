import React, { useState } from 'react';

const emojis = [
  '😀', '😺', '😸', '🍔', '🚗', '🚍', '⚪', '👕', '🎵', '🕒'
];

export default function EmojiPicker() {
  const [showPicker, setShowPicker] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [frequentlyUsed, setFrequentlyUsed] = useState([]);

  const handleEmojiClick = (emoji) => {
    setInputValue(prev => prev + emoji);

   
    setFrequentlyUsed(prev => {
      const updated = [emoji, ...prev.filter(e => e !== emoji)];
      return updated.slice(0, 10); 
    });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Emoji Picker</h2>
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows="3"
        style={{ width: '100%', fontSize: '1.2rem' }}
      />
      <br />
      <button onClick={() => setShowPicker(!showPicker)} style={{ marginTop: 10 }}>
        {showPicker ? 'Hide Picker' : 'Show Picker'}
      </button>

      {showPicker && (
        <div style={{
          marginTop: 10,
          border: '1px solid #ccc',
          padding: 10,
          borderRadius: 4,
          maxWidth: 300
        }}>
          <input
            placeholder="Search"
            style={{ width: '100%', marginBottom: 10, padding: 5 }}
            disabled 
          />
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            fontSize: '1.5rem'
          }}>
            {emojis.map((emoji, index) => (
              <span key={index} onClick={() => handleEmojiClick(emoji)} style={{ cursor: 'pointer' }}>
                {emoji}
              </span>
            ))}
          </div>

          {frequentlyUsed.length > 0 && (
            <div style={{ marginTop: 15 }}>
              <strong>Frequently Used</strong>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                fontSize: '1.5rem',
                marginTop: 5
              }}>
                {frequentlyUsed.map((emoji, index) => (
                  <span key={index} onClick={() => handleEmojiClick(emoji)} style={{ cursor: 'pointer' }}>
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}