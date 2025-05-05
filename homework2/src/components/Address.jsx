import React from "react";

export const Address = ({ users }) => {
  const usersFromSkopje = users.filter((user) => user.address === "Skopje");
  // console.log(usersFromSkopje);
  return (
    <div id="address">
      <h2>Users from Skopje:</h2>
      {usersFromSkopje.length > 0 ? (
        usersFromSkopje.map((user, i) => (
          <div key={i}>
            <h4>
              User: {user.userName} {user.lastName}
            </h4>
            <p>Address: {user.address}</p>
            <p>Age: {user.age} </p>
          </div>
        ))
      ) : (
        <p>No users from Skopje</p>
      )}
    </div>
  );
};
