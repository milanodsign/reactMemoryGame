import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PrivateRouter from "./PrivateRouter";
import { useSelector } from "react-redux";

const AuthenticationRouter = () => {
  const { auth } = useSelector((store) => store.login);

  return (
    <Routes>
      <Route
        path="*"
        element={auth ? <PrivateRouter /> : <PublicRouter />}
      />
    </Routes>
  );
};

export default AuthenticationRouter;
