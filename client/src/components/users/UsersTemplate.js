import React, { useState, useEffect } from "react";

import axios from "axios";
import UsersList from "./UsersList";
import UsersDetailModal from "../modal/users/UsersDetailModal";

const UsersTemplate = () => {
  const [users, setUsers] = useState([]);

  const [userListIsShown, setUserListIsShown] = useState(false);

  const [userItem, setUserItem] = useState({});

  const showUserDetailHandler = (userItem) => {
    setUserListIsShown(true);
    setUserItem(userItem);
  };

  const hideUserDetailHandler = () => {
    setUserListIsShown(false);
    usersBinding();
  };

  const usersBinding = async () => {
    const response = await axios.get("http://localhost:8090/users/list");
    setUsers(response.data);
    // console.log(response);
  };
  const params = {
    searchKeyword: "",
    searchType: "",
  };
  const search = async (keyword, type) => {
    console.log(keyword);
    console.log(type);
    params.searchKeyword = keyword;
    params.searchType = type;
    console.log(params);
    const response = await axios.get("http://localhost:8090/users/search", {
      params: {
        searchKeyword: params.searchKeyword,
        searchType: params.searchType,
      },
    });
    console.log("sdds");
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
          users={userItem}
          onClose={hideUserDetailHandler}
        ></UsersDetailModal>
      )}
      <UsersList
        users={users}
        showDetailModal={showUserDetailHandler}
        search={search}
      ></UsersList>
    </div>
  );
};

export default UsersTemplate;
