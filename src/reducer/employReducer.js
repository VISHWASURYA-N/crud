import {getUser } from "../types/type";

const employDetail = [];
export function EmployReducer(state = employDetail, action) {
  switch (action.type) {
    case getUser:
      return action.data.data;
      
   
    default:
      return state;
  }
}
