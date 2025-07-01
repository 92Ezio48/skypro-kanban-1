import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isAuth = !!localStorage.getItem("token"); // своя логика проверки
  return isAuth ? children : <Navigate to="/register" />;
}

export default ProtectedRoute;
