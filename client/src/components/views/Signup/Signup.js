import React from "react";
import "./Signup.css";

const Signup = () => {
  const signupHandler = () => {
    alert("회원가입 기능 구현중입니다.");
  };

  return (
    <div>
      <form action="/signup" method="POST">
        <div className="signupBody">
          <div id="signup-form">
            <h2>SignUp!</h2>
            ID
            <input type="text" id="userid" name="userid" />
            Password
            <input type="password" id="password" name="password" />
            <br />
            Username
            <input type="text" id="username" name="username" />
            <br />
            Email
            <input type="email" id="email" name="email" /> <br />
            <button class="signup-btn" onClick={signupHandler}>
              Sign up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
