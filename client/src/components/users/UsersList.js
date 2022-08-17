import React, { useState } from "react";

const UsersList = (props) => {
  return (
    <table className="list_table">
      <thead>
        <tr>
          <th>Index</th>
          <th>User_id</th>
          <th>User_Name</th>
          <th>createDate</th>
        </tr>
      </thead>
      <tbody></tbody>
      <tbody>
        {/* {list.map((listItem, index) => {
          return (
            <tr key={index}>
              <th>{list.length - index + 1}</th>
              <td>
                <Link
                  to={`/yjBoard/detail/${listItem.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {listItem.title}
                </Link>
              </td>
              <td>{listItem.author}</td>
              <td>{createTime(listItem.createDateTime)}</td>
            </tr>
          );
        })} */}
      </tbody>
    </table>
  );
};
export default UsersList;
