// src/UserData.js
import React, { useState } from 'react';

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({ name: '', email: '', age: '', gender: '', city: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const addUser = () => {
    setUsers([...users, user]);
    setUser({ name: '', email: '', age: '', gender: '', city: '' });
  };

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>User Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, index) => (
            <tr key={index}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.age}</td>
              <td>{u.gender}</td>
              <td>{u.city}</td>
              <td>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Add User</h3>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="text" name="email" value={user.email} onChange={handleInputChange} />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" name="age" value={user.age} onChange={handleInputChange} />
      </div>
      <div>
        <label>Gender: </label>
        <input type="text" name="gender" value={user.gender} onChange={handleInputChange} />
      </div>
      <div>
        <label>City: </label>
        <input type="text" name="city" value={user.city} onChange={handleInputChange} />
      </div>
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default UserData;
