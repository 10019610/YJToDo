import axios from "axios";
import React, { useState, useEffect } from "react";
import Modal from "../../common/Modal";

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
        <div>
          <h2>회원상세</h2>
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
                  <td>{createTime(DetailSearch.createDateTime)}</td>
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
