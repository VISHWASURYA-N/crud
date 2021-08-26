import axios from "axios";
import { addEmploy, deleteUser, editUser, GetEditUser, getUser } from "../types/type";

export const GETEmploy = () => async (dispatch) => {
  let data = await axios.get(`http://localhost:3000/employs`);
  dispatch({ type: getUser, data});
};
export const ADDEmploy = (usersdata) => async (dispatch) => {
 await axios.post(`http://localhost:3000/employs`, usersdata);
  dispatch({ type: addEmploy });
};
export const EditEmploy=(Editusers,id)=>async(dispatch)=>{
  await axios.put(`http://localhost:8000/employs/${id}`,Editusers);
   dispatch({type:editUser})
}
export const DeleteEmploy=(id)=>async(dispatch)=>{
  
   await axios.delete(`http://localhost:3000/employs/${id}`);
   dispatch({type:deleteUser})
}
export const GetEditEmploy=(id)=>async(dispatch)=>{
  const data=await axios.get(`http://localhost:3000/employs/${id}`)
  dispatch({type:GetEditUser,data})

}