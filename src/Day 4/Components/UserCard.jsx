import React from 'react';

const UserCard = ({ name, email, location, image }) => {
  return (
    <div style={{
      width: '250px',
      textAlign: 'center',
      border: '1px solid #ccc',
      padding: '15px',
      margin: '10px',
      borderRadius: '10px',
      backgroundColor: '#f9f9f9'
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }}
      />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{location}</p>
    </div>
  );
};

export default UserCard;