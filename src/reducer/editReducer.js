import { GetEditUser } from "../types/type";

const value = {
  name: null,
  age: null,
  email: null,
  company: null,
  role: null,
};
export const EditReducer = (state = value, aciton) => {
  switch (aciton.type) {
    case GetEditUser:
      return aciton.data.data;
    default:
      return state;
  }
};
