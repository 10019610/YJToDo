import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const PwFind = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const params = {
    name: "",
    username: "",
  };

  const pwfindHandler = async () => {
    params.name = name;
    params.username = username;
    const response = await axios.put(
      "http://localhost:8090/login/pwFind",
      params
    );
    if (response.status !== 200) {
      alert("일치하는 정보가 없습니다.");
    } else {
      alert("임시비밀번호가 1111로 지정되었습니다.");
    }
    console.log(response);
  };

  return (
    <div>
      <div>
        <input
          className="pw_finder"
          type="text"
          placeholder="이름"
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <input
          className="pw_finder"
          type="text"
          placeholder="아이디"
          onChange={usernameChangeHandler}
        />
        <button className="" onClick={pwfindHandler}>
          찾기
        </button>
      </div>
      <hr />
      {/* <div>아이디 :{idData.username}</div>
      <div>이름: {idData.name}</div>
      <div>이메일: {idData.email}</div>
      <div>생성일자: {idData.createDateTime}</div> */}
      <Link to="/login">로그인하시겠습니까?</Link>
    </div>
  );
};
export default PwFind;
