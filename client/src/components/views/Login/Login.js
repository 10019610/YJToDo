import React from "react";
import axios from "axios";

import "./Login.css";

const Login = () => {
  const logfindHandler = () => {
    alert("id/pw 찾기 구현 예정입니다.");
  };

  const loginHandler = () => {
    const response = axios.get('http://localhost:8090/login');
    console.log(response);
  }

  return (
    <div className="loginBody">
      <div className="login-section">
        <form action="/login" method="POST">
          <h1 className="login-h1">Login</h1>
          <div class="login-id">
            <input
              className="login_input"
              id="id"
              type="text"
              placeholder="아이디"
              name="userid"
            />
          </div>
          <div className="login_pw">
            <input
              className="login_input"
              id="password"
              type="text"
              placeholder="비밀번호"
              name="password"
            />
          </div>
          <div className="login_btn">
            <button className="login_btn" onClick={loginHandler}>Login</button>
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
        </form>
      </div>
    </div>
  );
};

export default Login;
