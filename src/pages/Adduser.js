import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ADDEmploy } from "../ActionCreater/ActionCreater";

const AddUser = () => {
  let history = useHistory();
  const dispatch = useDispatch()
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",  
    company: "",
    role: ""
  });
const {name,age,email,company,role}=user
const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
function handleSubmit(e){
e.preventDefault()
dispatch(ADDEmploy(user))
history.push("/")
setUser(
  {
    name: "",
    age: "",
    email: "",  
    company: "",
    role: ""
  }
)
}

 
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
          <label >NAME</label>
            <input
              type="text"
              className="form-control "
              placeholder="Enter Your Name"
              name="name"
              required
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>AGE</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Your age"
              required
              name="age"
              value={age}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>EMAIL</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              required
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label>COMPANY</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your company name"
              name="company"
              value={company}
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
          <label for="exampleInputEmail1">ROLE</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your role in company"
              name="role"
              value={role}
              required
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary mt-4 block ">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;