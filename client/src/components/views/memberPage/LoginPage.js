import React, { useState } from "react";
import axios from "axios";

import "./Login.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginParam = {
    username: username,
    password: password,
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const logfindHandler = () => {};

  const loginHandler = async () => {
    const response = await axios.post(
      "http://localhost:8090/login",
      loginParam
    );
    if (response.status !== 200) {
      alert("response error");
    }
    props.history.push("/main");
  };

  return (
    <div className="loginBody">
      <div className="login-section">
        <h1 className="login-h1">Login</h1>
        <div class="login-id">
          <input
            className="login_input"
            type="text"
            placeholder="아이디"
            onChange={usernameChangeHandler}
          />
        </div>
        <div className="login_pw">
          <input
            className="login_input"
            type="password"
            placeholder="비밀번호"
            onChange={passwordChangeHandler}
          />
        </div>
        <div className="login_btn">
          <button className="login_btn" onClick={loginHandler}>
            Login
          </button>
        </div>
        <div class="idpw">
          <a href="/" onClick={logfindHandler}>
            아이디 찾기{" "}
          </a>
          <a href="/" onClick={logfindHandler}>
            {" "}
            / 비밀번호 찾기
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
