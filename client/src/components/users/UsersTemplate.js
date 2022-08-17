import React, { useState, useEffect } from "react";

import axios from "axios";
import UsersList from "./UsersList";

const UsersTemplate = () => {
  const [users, setUsers] = useState([]);

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
      <UsersList users={users}></UsersList>
    </div>
  );
};

export default UsersTemplate;
