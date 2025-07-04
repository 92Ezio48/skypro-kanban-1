import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuth }) {
  // Проверяем авторизацию только через пропс!
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
