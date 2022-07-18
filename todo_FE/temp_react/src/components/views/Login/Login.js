import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="loginBody">
      <div class="login-section">
        <form class="login-input" action="/login" method="POST">
          <h1 className="login-h1">Login</h1>
          <div class="login-id">
            <input id="id" type="text" placeholder="아이디" name="userid" />
          </div>
          <div class="login-pw">
            <input
              id="password"
              type="text"
              placeholder="비밀번호"
              name="password"
            />
          </div>
          <div class="login-btn">
            <button>Login</button>
          </div>
          <div class="idpw">
            <a href="/">아이디 찾기 </a>
            <a href="/"> / 비밀번호 찾기</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
