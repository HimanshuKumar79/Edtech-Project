import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import { getAllCourses, getUserCourses } from "./firebaseData/fetchCourses";
import { useDispatch } from "react-redux";
import "./App.css";
import { Toaster } from "react-hot-toast";
const Layout = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getAllCourses(dispatch);
    getUserCourses(dispatch);
  }, []);
  return (
    <div className="App">
      <div className="flex justify-center items-center flex-col bg-[#2c2c2f] w-[100vw] min-h-[100vh] max-h-fit">
        <NavBar />
        <Outlet />
        <Toaster/>
      </div>
    </div>
  );
};

export default Layout;
