import { useDispatch } from "react-redux";
import { stateSingIn, stateUsers } from "../redux/slice/singInSlice.js";
import jwtDecode from "jwt-decode";
import { request } from "./request.js";

let users;
let existingUser;

try {
  const { result } = await request({
    url: "users",
  });
  users = result;
} catch (error) {
  error.message;
}

const token = document.cookie ? document.cookie.replace("post=", "") : false;
const { _id } = document.cookie ? jwtDecode(token) : false;

if (_id) {
  try {
    const { result } = await request({
      url: `users/${_id}`,
    });
    existingUser = result;
  } catch (error) {
    error.message;
  }
}

export const Sing = () => {
  const dispatch = useDispatch();
  !!users.length && dispatch(stateUsers());

  token && existingUser && dispatch(stateSingIn());
};
