import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const IdFind = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [idData, setIdData] = useState({});

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const findParamsId = {
    name: name,
    email: email,
  };
  const idfindHandler = async () => {
    const response = await axios.get("http://localhost:8090/login/idFind", {
      params: { name: findParamsId.name, email: findParamsId.email },
    });
    setIdData(response.data);
    console.log(response.data);
  };

  return (
    <div>
      <div>
        <input
          className="id_finder"
          type="text"
          placeholder="name"
          onChange={nameChangeHandler}
        />
      </div>
      <div>
        <input
          className="id_finder"
          type="text"
          placeholder="email"
          onChange={emailChangeHandler}
        />
        <button className="" onClick={idfindHandler}>
          찾기
        </button>
      </div>
      <hr />
      <div>아이디 :{idData.username}</div>
      <div>이름: {idData.name}</div>
      <div>이메일: {idData.email}</div>
      <div>생성일자: {idData.createDateTime}</div>
      <Link to="/login">로그인하시겠습니까?</Link>
    </div>
  );
};

export default IdFind;
