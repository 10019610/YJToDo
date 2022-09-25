import { useState, useEffect } from "react";
import classes from "./user.module.css";

function UsersList() {
  const [userData, setUserData] = useState([]);

  const read = async () => {
    const response = await fetch("/api/user/userList", {
      method: "GET",
    });
    const json = await response.json();
    setUserData(json.message);
    console.log(json.message);
  };
  useEffect(() => {
    read();
  }, []);

  return (
    <div>
      <div className={classes.form}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>번호</th>
              <th>이메일</th>
              <th>권한</th>
              <th>생성일</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{user.email}</td>
                  <td>검사원</td>
                  <td>2022.09.25</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersList;
