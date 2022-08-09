import React, { useState } from "react";
import axios from "axios";

import styles from "../../css/Common.module.css";
import "./Signup.css";

const Signup = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const signupParam = {
    username: username,
    password: password,
    name: name,
    email: email,
  }

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  }
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  }
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  }
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  }

  const signupHandler = () => {
    console.log(signupParam);
    const response = axios.post('http://localhost:8090/signup', signupParam)
    if (response.status === 200) {
      console.log(response);
    }
  }


  return (
    <div className={styles.base_form}>
      <div>
        <div id="signup-form">
          ID
          <input type="text" name="username" onChange={usernameChangeHandler} />
          Password
          <input type="password" name="password" onChange={passwordChangeHandler} />
          <br />
          Name
          <input type="text" name="name" onChange={nameChangeHandler} />
          <br />
          Email
          <input type="email" name="email" onChange={emailChangeHandler} /> <br />
          <button onClick={signupHandler}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
