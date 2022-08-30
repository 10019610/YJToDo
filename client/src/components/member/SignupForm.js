import React, { useState } from "react";
import axios from "axios";

import styles from "../../css/Common.module.css";
import "./Signup.css";

const Signup = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const signupParam = {
    username: username,
    password: password,
    name: name,
    email: email,
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const passwordCheckChangeHandler = (e) => {
    setPasswordCheck(e.target.value);
    setPasswordError(e.target.value !== password);
  };
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const signupHandler = () => {
    if (password === passwordCheck) {
      const response = axios.post("http://localhost:8090/signup", signupParam);
      props.addBoard(response);
    } else {
      alert("입력된 비밀번호를 확인하십시오");
    }
  };

  return (
    <div className={styles.base_form}>
      <div>
        <div id="signup-form">
          ID
          <input type="text" name="username" onChange={usernameChangeHandler} />
          Password
          <input
            type="password"
            name="password"
            onChange={passwordChangeHandler}
          />
          <br />
          Password-Check
          <input
            type="password"
            name="password-check"
            onChange={passwordCheckChangeHandler}
          />
          {passwordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>
          )}
          <br />
          Name
          <input type="text" name="name" onChange={nameChangeHandler} />
          <br />
          Email
          <input type="email" name="email" onChange={emailChangeHandler} />{" "}
          <br />
          <button onClick={signupHandler}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
