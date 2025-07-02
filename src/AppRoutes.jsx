import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";
import ExitPage from "./pages/ExitPage";
import PopBrowseModal from "./components/PopBrowseModal";
import ExitConfirmModal from "./components/ExitConfirmModal";

// ⬇️ Принимаем два пропса для темы от родителя (например, из App.jsx)
function AppRoutes({ isDarkTheme, setIsDarkTheme }) {
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
            <MainPage
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
            />
          </ProtectedRoute>
        }
      >
        {/* Вложенные маршруты для модалки по карточке */}
        <Route path="card/:id" element={<PopBrowseModal />} />
        <Route path="exit-confirm" element={<ExitConfirmModal />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
