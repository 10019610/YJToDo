import React from "react";

const UsersList = (props) => {
  // console.log(props.users);
  const usersData = props.users;

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
              <td>{usersItem.name}</td>
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
