import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes } from "./routes";
import { useEffect, useState } from "react";
import Login from "./pages/Login";

function App() {
  const token = localStorage.getItem("accessToken");

  const isLoggedIn = !!token;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />}/>
        {publicRoutes.map(({ path, Component }, index) => (
          <Route key={index} path={path}  element={isLoggedIn ? <Component /> : <Navigate to="/login" />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
