import React from "react";
import { Link } from "react-router-dom";

const UsersList = (props) => {
  // console.log(props.users);
  const usersData = props.users;
  const userItem = {
    userId: props.users.id,
  };

  const createTime = (datetime) => {
    let date = new Date(datetime);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };
  return (
    <table className="list_table">
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>User_Name</th>
          <th>createDate</th>
        </tr>
      </thead>
      <tbody>
        {usersData.map((usersItem, index) => {
          return (
            <tr key={index}>
              <th>{index + 1}</th>
              {/* Link를 쓰는 이유가 뭔지? 모달로 '이동' 하겠는다는 건지 모달을 띄우겠다는 건지 확인필요 */}
              <td>
                <Link
                  to={`/users/detail/${usersItem.id}`}
                  onClick={props.showDetailModal}
                >
                  {usersItem.name}
                </Link>
              </td>
              {/* <td>
                <button onClick={props.showDetailModal.bind(this, userItem)}>
                  {usersItem.name}
                </button>
              </td> */}
              <td>{usersItem.username}</td>
              <td>{createTime(usersItem.createDateTime)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default UsersList;
