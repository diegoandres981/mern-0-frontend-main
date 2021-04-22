import React from "react";

import UsersList from "../components/UsersList";

const Users = (): any => {
  const USERS = [
    {
      id: "u1",
      name: "Diego Andres",
      image:
        "https://media-exp1.licdn.com/dms/image/C4E03AQH0QrqaHHRpMA/profile-displayphoto-shrink_200_200/0/1599865021445?e=1624492800&v=beta&t=JHkYt-cLr4XNGlWngv75GWJqSdxeX_NR7vlkLf9iHEE",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
