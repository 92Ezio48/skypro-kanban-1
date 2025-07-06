import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/404Page";
import ProtectedRoute from "./pages/ProtectedRoutePage";
import PopBrowseModal from "./pages/PopBrowsePage";
import ExitConfirmModal from "./pages/ExitConfirmPage";
import PopnewcardComponent from "./pages/PopNewCardPage";

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
