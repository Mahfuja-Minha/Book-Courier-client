import React from "react";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";

const AdminRoute = ({ children }) => {
  const { loading } = useAuth();
  const { role, roleLoading } = useRole();

  if (loading || roleLoading) {
    return <div className="text-center py-20">Loading...</div>;
  }

 
  if (role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
};

export default AdminRoute;
