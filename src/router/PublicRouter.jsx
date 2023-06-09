import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../views/login/Login";

const PublicRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default PublicRouter;
