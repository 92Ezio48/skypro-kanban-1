import React, { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import HeaderComponent from "../components/header.jsx";
import ColumnComponent from "../components/Column";
import * as S from "../styled-components.js";
import { MainContent } from "../GlobalStyles.js";
import { TasksContext } from "../context/TasksContext";
import { AuthContext } from "../context/AuthContext";

// Новый компонент для надписи

const STATUS_MAP = {
  none: "Без статуса",
  todo: "Нужно сделать",
  progress: "В работе",
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

  React.useEffect(() => {
    if (!user || !user.token) {
      navigate("/login");
    }
  }, [user, navigate]);

  const mappedTasks = tasks.map((task) => ({
    ...task,
    status: STATUS_MAP[task.status] || "Без статуса",
  }));

  const filteredTasks = mappedTasks.filter((task) => task.userId === user.id);

  const columns = statuses.map((status) => ({
    title: status,
    cards: filteredTasks.filter((card) => card.status === status),
  }));

  // Проверка отсутствия задач для пользователя
  const isTasksEmpty = filteredTasks.length === 0;

  return (
    <>
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <Outlet context={{ onTasksChanged: fetchTasks }} />
      <S.MainComponent $isDarkTheme={isDarkTheme}>
        <S.Container $isDarkTheme={isDarkTheme}>
          <S.Mainblock $isDarkTheme={isDarkTheme}>
            <MainContent>
              <S.ColumnsWrapper>
                {error && <div>{error}</div>}
                {isTasksEmpty ? (
                  <S.NoTasksText $isDarkTheme={isDarkTheme}>
                    Задачи отсутствуют
                  </S.NoTasksText>
                ) : (
                  columns.map((col) => (
                    <ColumnComponent
                      key={col.title}
                      title={col.title}
                      cards={col.cards}
                      isDarkTheme={isDarkTheme}
                      loading={loading}
                    />
                  ))
                )}
              </S.ColumnsWrapper>
            </MainContent>
          </S.Mainblock>
        </S.Container>
      </S.MainComponent>
    </>
  );
}

export default MainPage;
