import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import NotFound from "./pages/404Page";
import ProtectedRoute from "./pages/ProtectedRoutePage";
import PopBrowseModal from "./pages/PopBrowsePage";
import ExitConfirmModal from "./pages/ExitConfirmPage";
import PopnewcardComponent from "./pages/PopNewCardPage";
import TasksProvider from "./context/TasksProvider";
import AuthProvider from "./context/AuthProvider"; // по умолчанию

function AppRoutes({ isDarkTheme, setIsDarkTheme }) {
  return (
    <TasksProvider>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/"
            element={
              <MainPage
                isDarkTheme={isDarkTheme}
                setIsDarkTheme={setIsDarkTheme}
              />
            }
          >
            <Route path="card/:id" element={<PopBrowseModal />} />
            <Route path="create" element={<PopnewcardComponent />} />
            <Route path="exit-confirm" element={<ExitConfirmModal />} />
          </Route>
        </Route>
      </Routes>
    </TasksProvider>
  );
}

export default AppRoutes;
