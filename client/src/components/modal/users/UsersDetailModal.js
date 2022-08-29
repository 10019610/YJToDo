import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../../common/Modal";
import "./User.css";

const UsersDetailModal = (props) => {
  console.log(props.users.id);
  const detailParamsId = props.users.id;

  const [DetailSearch, setDetailSearch] = useState({});

  const usersDetail = async () => {
    const response = await axios.get("http://localhost:8090/users/detail", {
      params: { detailParamsId: detailParamsId },
    });
    setDetailSearch(response.data);
    // console.log(response);
  };

  const createTime = (datetime) => {
    let date = new Date(datetime);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };
  useEffect(() => {
    usersDetail();
  }, []);

  return (
    <div>
      <Modal onClose={props.onClose}>
        <div className="cancel-btn">
          <h2 className="usermodal-header">회원상세</h2>
          <div>
            <button onClick={props.onClose}>cancel</button>
          </div>
          <div>
            <table className="list_table">
              <thead>
                <tr>
                  <th>이름</th>
                  <th>아이디</th>
                  <th>생성일</th>
                  <th>멤버타입</th>
                  <th>이메일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{DetailSearch.name}</td>
                  <th>{DetailSearch.username}</th>
                  <td>{createTime(DetailSearch.createDateTime)}</td>
                  <td>{DetailSearch.memberType}</td>
                  <td>{DetailSearch.email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default UsersDetailModal;
