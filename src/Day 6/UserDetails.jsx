import React, { useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Userdetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  function fetchUserDetails() {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error("Error fetching user details:", error));
  }

  useState(() => {
    fetchUserDetails();
  }, [id]);

  
  return (
    <div>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  )
}