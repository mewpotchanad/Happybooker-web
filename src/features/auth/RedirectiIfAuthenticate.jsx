import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectiIfAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();
  if (authenticatedUser) {
    if (authenticatedUser.role === "admin") {
      return navigate("/admin");
    }
    return navigate("/");
  }
  return children;
}
