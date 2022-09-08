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

  const loginHandler = async () => {
    const response = await axios
      .post("http://localhost:8090/login", loginParam)
      .catch(function (error) {
        alert("로그인 정보를 확인해주세요!");
        console.log(error);
      });
    if (response.status === 200) {
      props.history.push("/main");
    }
  };

  return (
    <div className="loginBody">
      <div className="login-section">
        <h1 className="login-h1">Login</h1>
        <div className="login-id">
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
        <div className="idpw">
          <a href="/login/IdFind">아이디 찾기</a>
          <a href="/login/PwFind">/ 비밀번호 찾기</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
