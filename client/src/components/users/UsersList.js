import React, { useState } from "react";

const UsersList = (props) => {
  const usersData = props.users;

  const createTime = (datetime) => {
    let date = new Date(datetime);
    date =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

    return date;
  };

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchType, setSearchType] = useState("NAME");

  const searchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const searchHandler = () => {
    props.search(searchKeyword, searchType);
    console.log("dsd");
  };

  const onChangeType = (e) => {
    setSearchType(e.target.value);
  };
  return (
    <div className="list_table">
      <div>
        <div className="search-styles">
          <span>
            <select value={searchType} onChange={onChangeType}>
              <option name="NAME" value="NAME">
                이름
              </option>
              <option name="UserName" value="UserName">
                아이디
              </option>
            </select>
          </span>
          <span>
            <input
              type="text"
              required
              placeholder="Search!"
              onChange={searchChange}
              value={searchKeyword}
            />
            <button onClick={searchHandler}>검색</button>
          </span>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>순번</th>
            <th>이름</th>
            <th>아이디</th>
            <th>생성일</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((usersItem, index) => {
            return (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <button onClick={props.showDetailModal.bind(this, usersItem)}>
                    {usersItem.name}
                  </button>
                </td>
                <td>{usersItem.username}</td>
                <td>{createTime(usersItem.createDateTime)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UsersList;
