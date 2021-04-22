import React from "react";
import "./Users.css";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS: any = [
    {
      id: "u1",
      image:
        "https://i.picsum.photos/id/877/400/300.jpg?hmac=qD6pLIhs_M4_LL-K2MYUuyd89Dzqfo1iNVEM7CyYScs",
      name: "default_user",
      placeCount: 1,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
