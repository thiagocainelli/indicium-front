import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { Spin } from "antd";

const ProjectRoutes = () => {
  const { user } = useAuth();

  // NotFound Page
  const NotFound = React.lazy(() => import("./pages/Default/NotFound"));

  // Authentication Pages
  const Login = React.lazy(() => import("./pages/authentication/Login"));
  const Register = React.lazy(() => import("./pages/authentication/Register"));

  return (
    <React.Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          <Spin />
        </div>
      }
    >
      <Router>
        <Routes>
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />

          {/* Authentication */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {user && <></>}
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
