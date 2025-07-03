import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/404";
import ProtectedRoute from "./components/ProtectedRoute";
import PopBrowseModal from "./components/PopBrowseModal";
import ExitConfirmModal from "./components/ExitConfirmModal";
import PopnewcardComponent from "./components/pop-new-card";

function AppRoutes({ isDarkTheme, setIsDarkTheme, isAuth, setIsAuth }) {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/login" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/" element={<ProtectedRoute isAuth={isAuth} />}>
        <Route
          element={
            <MainPage
              isDarkTheme={isDarkTheme}
              setIsDarkTheme={setIsDarkTheme}
              setIsAuth={setIsAuth}
            />
          }
        >
          <Route index element={null} />
          <Route path="card/:id" element={<PopBrowseModal />} />
          <Route path="create" element={<PopnewcardComponent />} />
          <Route
            path="exit-confirm"
            element={<ExitConfirmModal setIsAuth={setIsAuth} />}
          />
        </Route>
      </Route>
    </Routes>
  );
}
export default AppRoutes;
