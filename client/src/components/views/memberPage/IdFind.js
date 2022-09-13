import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const IdFind = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [idData, setIdData] = useState([]);

  const createTime = (craeteDate) => {
    let date = new Date(craeteDate);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };

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
      {/* <div>아이디 :{idData.username}</div>
      <div>이름: {idData.name}</div>
      <div>이메일: {idData.email}</div>
      <div>생성일자: {idData.createDateTime}</div> */}
      <table className="list_table">
        <thead>
          <tr>
            <th>번호</th>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody></tbody>

        <tbody>
          {idData.map((item, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{item.username}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{createTime(item.createDateTime)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to="/login">로그인하시겠습니까?</Link>
    </div>
  );
};

export default IdFind;
