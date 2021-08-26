import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { DeleteEmploy,GETEmploy} from "../ActionCreater/ActionCreater";

export default function Userlist({ users }) {
  const dispatch = useDispatch();
  function deleteUser(id) {
    dispatch(DeleteEmploy(id));
  }
  useEffect(() => {
    dispatch(GETEmploy());
  }, [deleteUser]);
 
  return (
    <div>
      <table className="table border shadow">
        <thead className="bg-dark text-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Company</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
              <td>{user.company}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  className="btn btn-outline-primary m-2"
                  to={`/EditUser${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className="btn btn-danger"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
