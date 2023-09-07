import React from "react";

const User = ({ users }) => {
  return (
    <>
      <h1>User Comp</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        {users.map((user) => (
          <tbody>
            <tr>
              <td>{user.username}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default User;
