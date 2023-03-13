import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRouteAdmin({ children }) {
  const { authenticatedUser } = useAuth();
  const navigate = useNavigate();
  if (authenticatedUser) {
    if (authenticatedUser.role !== "admin") {
      return navigate("/");
    }
  }
  return children;
}
