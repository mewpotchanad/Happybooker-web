import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectiIfAuthenticateAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser.role) {
    return <Navigate to={"/admin"} />;
  }
  return children;
}
