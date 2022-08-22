import React, { useState, useEffect } from "react";

import axios from "axios";
import UsersList from "./UsersList";
import UsersDetailModal from "../modal/users/UsersDetailModal";

const UsersTemplate = () => {
  const [users, setUsers] = useState([]);

  const [userList, setUserList] = useState({});

  const [userListIsShown, setUserListIsShown] = useState(false);

  const showUserDetailHandler = (userList) => {
    // usersList에서 Link를 사용했는데 onclick를 또 쓴 이유가 뭔지?
    // 그리고 id를 보내는 의도였다면 왜 여기서 list를 세팅하는지?
    // 뭘 보내고 뭘 받고싶은지 생각할 필요가 있을 듯
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
