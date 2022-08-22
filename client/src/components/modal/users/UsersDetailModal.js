import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../../common/Modal";

const UsersDetailModal = (props) => {
  console.log(props);
  // const detailParamsId = props.users.id;
  const detailParamsId = props.match.params.id;

  const [DetailSearch, setDetailSearch] = useState({});

  const usersDetail = async () => {
    const response = await axios.get("http://localhost:8090/users/detail", {
      params: { detailParamsId: detailParamsId },
    });
    setDetailSearch(response.data);
    console.log(response);
  };
  useEffect(() => {
    usersDetail();
  }, []);

  return (
    <div>
      <Modal onClose={props.onClose}>
        <div>
          <h2>회원상세</h2>
          <div>
            <Link to="/users">임시나가기버튼</Link>
          </div>
          <div>
            <table className="list_table">
              <thead>
                <tr>
                  <th>userName</th>
                  <th>Name</th>
                  <th>생성일</th>
                  <th>사용여부</th>
                  <th>삭제여부</th>
                  <th>멤버타입</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{DetailSearch.username}</th>
                  <td>{DetailSearch.name}</td>
                  <td>{DetailSearch.createDateTime}</td>
                  <td>{DetailSearch.useYn}</td>
                  <td>{DetailSearch.delYn}</td>
                  <td>{DetailSearch.memberType}</td>
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
