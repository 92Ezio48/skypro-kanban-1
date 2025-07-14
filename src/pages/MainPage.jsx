import React, { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header.jsx";
import ColumnComponent from "../components/Column";
import * as S from "../styled-components.js";
import { MainContent } from "../GlobalStyles.js";
import { TasksContext } from "../context/TasksContext";
import { AuthContext } from "../context/AuthContext";

// Слева — как сервер, справа — как у тебя на канбане:
const STATUS_MAP = {
  none: "Без статуса",
  todo: "Нужно сделать",
  "in progress": "В работе",
  testing: "Тестирование",
  done: "Готово",
};

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage({ isDarkTheme, setIsDarkTheme }) {
  const { tasks, loading, error, fetchTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Проверка авторизации
  React.useEffect(() => {
    if (!user || !user.token) {
      navigate("/login");
    }
  }, [user, navigate]);

  // 🎯 Маппим статусы задач
  const mappedTasks = tasks.map((task) => ({
    ...task,
    status: STATUS_MAP[task.status] || "Без статуса",
  }));

  // Фильтруем задачи конкретного пользователя
  const filteredTasks = mappedTasks.filter((task) => task.userId === user.id);

  const columns = statuses.map((status) => ({
    title: status,
    cards: filteredTasks.filter((card) => card.status === status),
  }));

  return (
    <>
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      {/* Передаём обновление задач во все модалки */}
      <Outlet context={{ onTasksChanged: fetchTasks }} />
      <S.MainComponent $isDarkTheme={isDarkTheme}>
        <S.Container $isDarkTheme={isDarkTheme}>
          <S.Mainblock $isDarkTheme={isDarkTheme}>
            <MainContent>
              <S.ColumnsWrapper>
              {error && <div>{error}</div>}
              {columns.map((col) => (
                <ColumnComponent
                  key={col.title}
                  title={col.title}
                  cards={col.cards}
                  isDarkTheme={isDarkTheme}
                  loading={loading} // 👈 пробрасывай глобальный loading всем колонкам!
                />
              ))}
              </S.ColumnsWrapper>
            </MainContent>
          </S.Mainblock>
        </S.Container>
      </S.MainComponent>
    </>
  );
}

export default MainPage;
