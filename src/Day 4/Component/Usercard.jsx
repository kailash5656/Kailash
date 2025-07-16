import React from 'react';
import './UserCard.css'; // optional

const UserCard = ({ name, email, location, image }) => {
  return (
    <div className="user-card">
      <img src={image} alt={name} className="profile-img" />
      <div className="user-info">
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default UserCard;

