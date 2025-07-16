import React, {useEffect, useState} from "react";
import "./Userlist.css";

function Userlist() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    return (
        <div className="userlist">
            <h1>User List</h1>
            <table border="1" cellPadding="8" cellSpacing="0">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
                <th>City</th>
            </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.username}</td>
                    <td>{user.address.city}</td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default Userlist;    