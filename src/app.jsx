import "./app.css";
import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/authSlice";
import { useEffect, useState } from "preact/hooks";
import authService from "./appwrite/auth";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { Header, Footer } from "./conponents";
import { Outlet } from "react-router-dom";
import { Input } from "./conponents/index";
import { HelpOutline, Label } from "@mui/icons-material";

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => console.error("Error :: app :: ", error))
      .finally(() => {
        setTimeout(() => setIsLoading(false), 1000);
      });
  }, []);

  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          TODO {/* <Outlet /> */}
          <Input />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
