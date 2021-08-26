import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GETEmploy } from "../ActionCreater/ActionCreater";
import Userlist from "./Userlist";
const Home = () => {
  const users = useSelector((state) => state.EmployReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GETEmploy());
  }, [users]);
  console.log(users);

  

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Userlist users={users} />
      </div>
    </div>
  );
};

export default Home;
