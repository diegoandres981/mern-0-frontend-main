import React from "react";
import "./Users.css";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      image: "default_image",
      name: "default_user",
      placeCount: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
