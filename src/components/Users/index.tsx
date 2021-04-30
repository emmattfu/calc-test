import React from "react";
import { useSelector } from "react-redux";

import useGetData from "../../hooks/useGetData";
import { usersSelector } from "../../store/selectors";
import { getUsersLoading } from "../../store/slices/usersSlice";
import CardComponent from "../Card";

const Users = () => {
  useGetData(getUsersLoading);
  const users = useSelector(usersSelector);

  return (
    <>
      {users.map((user) => (
        <CardComponent key={user.id} user={user} />
      ))}
    </>
  );
};

export default Users;
