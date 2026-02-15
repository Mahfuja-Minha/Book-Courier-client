import { Navigate } from "react-router";
import useRole from "../hooks/useRole";

const LibrarianRoute = ({ children }) => {
  const {role, isLoading} = useRole();

  if (isLoading) return <p>Loading...</p>;

  if (role !== "librarian") {
    return <Navigate to="/" />;
  }

  return children;
};

export default LibrarianRoute;
