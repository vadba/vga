import { useDispatch, useSelector } from "react-redux";
import {
  fetchUsersData,
  stateSingIn,
  stateUsers,
} from "../redux/slice/singInSlice.js";
import jwtDecode from "jwt-decode";
import { useEffect } from "react";

export const Sing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, []);

  const { usersData } = useSelector((state) => state.singInSlice);

  const token = document.cookie ? document.cookie.replace("post=", "") : false;
  const { _id } = document.cookie ? jwtDecode(token) : false;

  if (!!usersData.length && _id) {
    const existingUser = usersData.find((user) => user.id === _id);
    if (!!existingUser) {
      dispatch(stateSingIn());
    }
    // !!usersData.length && dispatch(stateUsers());
  }
};
