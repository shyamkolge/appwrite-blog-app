import React from "react";
import authService from "../../../appwrite/auth";
import { logout } from "../../../store/authSlice";
import { useDispatch } from "react-redux";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => dispatch(logout));
  };

  return <button className="btn btn-error" onClick={logoutHandler}>Logout</button>;
};

export default LogoutBtn;
