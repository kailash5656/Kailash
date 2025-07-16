import React, { useEffect, useState } from 'react';
import UserCard from './Day4/Components/UserCard';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  useEffect(() => {
    
    fetch('https://randomuser.me/api/?results=6')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        
        const usersData = data.results.map((user) => ({
          name: `${user.name.title} ${user.name.first} ${user.name.last}`,
          email: user.email,
          location: user.location.city,
          image: user.picture.large,
        }));
        setUsers(usersData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div style={{ textAlign: 'center' }}>Loading users...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center' }}>List of Users</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            name={user.name}
            email={user.email}
            location={user.location}
            image={user.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Users;

 