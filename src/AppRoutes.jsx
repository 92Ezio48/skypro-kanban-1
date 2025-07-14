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
        <Route path="*" element={<NotFound isDarkTheme={isDarkTheme} />} />
        <Route
          path="/login"
          element={<SignInPage isDarkTheme={isDarkTheme} />}
        />
        <Route
          path="/register"
          element={<SignUpPage isDarkTheme={isDarkTheme} />}
        />
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
            <Route
              path="card/:id"
              element={<PopBrowseModal isDarkTheme={isDarkTheme} />}
            />
            <Route
              path="create"
              element={<PopnewcardComponent isDarkTheme={isDarkTheme} />}
            />
            <Route
              path="exit-confirm"
              element={<ExitConfirmModal isDarkTheme={isDarkTheme} />}
            />
          </Route>
        </Route>
      </Routes>
    </TasksProvider>
  );
}

export default AppRoutes;
