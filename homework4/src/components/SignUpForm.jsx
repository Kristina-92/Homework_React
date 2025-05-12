import React, { useEffect, useState } from "react";
import "./../css/SignUpForm.css";

export function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showData, setShowData] = useState(false);

  useEffect(() => {
    console.log("This is useEffect = ComponentDid Mount");
  }, []);

  const handleData = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !address || !email || !password) {
      alert("Fill in all input fields!");
      return;
    }
    setShowData(!showData);
  };

  return (
    <div id="form-submit" onSubmit={handleData}>
      <form id="form">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button id="submit-btn" type="submit">
          Sign Up
        </button>
      </form>

      <br />
      <br />

      {showData && (
        <table className="signUp-data-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>E-mail</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{address}</td>
              <td>{email}</td>
              <td>{password}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
