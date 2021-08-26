import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { EditEmploy, GetEditEmploy } from "../ActionCreater/ActionCreater";

const EditUser = () => {
  let data = useSelector((state) => state.EditReducer);
  const [user, setUser] = useState({});
  const { id } = useParams();
  useEffect(() => {
    dispatch(GetEditEmploy(id));
  }, []);
  useEffect(() => {
    setUser(data)
  }, [data]); 
  const dispatch = useDispatch();
  let history = useHistory();

  const { name, age, email, company, role } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  function handleEdit(e) {
    e.preventDefault();
    console.log(user);
    dispatch(EditEmploy(user,id));
    history.push("/");
  }
 
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
        <form onSubmit={handleEdit}>
          <div className="form-group">
            <label>NAME</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>AGE</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your age"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>EMAIL</label>
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>COMPANY</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your company name"
              name="company"
              value={company}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your role in company"
              name="role"
              value={role}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">edit user</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
