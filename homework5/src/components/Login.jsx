import React, { useState, useEffect } from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  const [isTextArea, setisTextArea] = useState(false);
  const [comment, setComment] = useState("");
  const [selectedOption, setSelectedOption] = useState(1);

  const elements = [
    { value: "Facebook", name: "Facebook" },
    { value: "Instagram", name: "Instagram" },
    { value: "SnapChat", name: "SnapChat" },
  ];

  useEffect(() => {
    console.log("Username: ", username);
    console.log("Password: ", password);
  }, [username, password]);

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function showValues(e) {
    e.preventDefault();
    alert(
      `Username: ${username}\nPassword: ${password}\nSelected Option: ${selectedOption}`
    );
  }

  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type={"text"}
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          type={inputType}
          placeholder={"Enter Password"}
          value={password}
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          setToggle={handleInputChange}
        />

        <Input
          type="text"
          placeholder="Enter your Comment..."
          name="comment"
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          renderTextArea={isTextArea}
          changeInput={() => {
            setisTextArea(!isTextArea);
          }}
        />
        <Dropdown
          apps={elements}
          onChange={(e) => {
            setSelectedOption(e.target.value);
          }}
        />
        <button className="action-button">Sign In</button>
      </form>
    </div>
  );
};
