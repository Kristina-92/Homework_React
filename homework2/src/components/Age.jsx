import React from "react";

export const Age = ({ users }) => {
  return (
    <div id="age">
      <h2>Users older than 18:</h2>

      {users.map((user, i) => {
        return user.age > 18 ? (
          <div key={i}>
            <h4>
              {user.userName} {user.lastName}. Age {user.age}
            </h4>
          </div>
        ) : (
          <p key={i}>Less than 18</p>
        );
      })}
    </div>
  );
};
