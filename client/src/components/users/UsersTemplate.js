import React, { useState, useEffect } from "react";

import axios from "axios";
import UsersList from "./UsersList";
import UsersDetailModal from "../modal/users/UsersDetailModal";

const UsersTemplate = () => {
  const [users, setUsers] = useState([]);

  const [userList, setUserList] = useState({});

  const [userListIsShown, setUserListIsShown] = useState(false);

  const showUserDetailHandler = (userList) => {
    setUserListIsShown(true);
    setUserList(userList);
  };

  const hideUserDetailHandler = () => {
    setUserListIsShown(false);
    usersBinding();
  };

  const usersBinding = async () => {
    const response = await axios.get("http://localhost:8090/users/list");
    setUsers(response.data);
    console.log(response);
  };

  useEffect(() => {
    usersBinding();
  }, []);
  return (
    <div>
      {userListIsShown && (
        <UsersDetailModal
          users={users}
          onClose={hideUserDetailHandler}
        ></UsersDetailModal>
      )}
      <UsersList
        users={users}
        showDetailModal={showUserDetailHandler}
      ></UsersList>
    </div>
  );
};

export default UsersTemplate;
