import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";
import CardComponent from "./components/Card";
import Login from "./pages/Login";
import ExitPage from "./pages/ExitPage";
import PopBrowseComponent from "./components/pop-browse";
import PopBrowseModal from "./components/PopBrowseModal";
function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/exit" element={<ExitPage />} />
      <Route path="/login" element={<SignInPage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainPage />
          </ProtectedRoute>
        }
      >
        {/* Вложенный маршрут для модального окна */}
        <Route path="card/:id" element={<PopBrowseModal />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
