import React, { useContext } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import HeaderComponent from "../components/Header.jsx";
import ColumnComponent from "../components/Column";
import * as S from "../styled-components.js";
import { MainContent } from "../GlobalStyles.js";
import { TasksContext } from "../context/TasksContext";
import { AuthContext } from "../context/AuthContext";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage({ isDarkTheme, setIsDarkTheme }) {
  // Теперь достаём fetchTasks из TasksContext!
  const { tasks, loading, error, fetchTasks } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Проверка авторизации
  React.useEffect(() => {
    if (!user || !user.token) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Фильтруем задачи конкретного пользователя
  const filteredTasks = tasks.filter((task) => task.userId === user.id);

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

      {/* 👉🏻 Прокидываем fetchTasks в Outlet через context, чтобы PopnewcardComponent мог вызвать его */}
      <Outlet context={{ onTaskCreated: fetchTasks }} />

      <S.MainComponent $isDarkTheme={isDarkTheme}>
        <S.Container $isDarkTheme={isDarkTheme}>
          <S.Mainblock $isDarkTheme={isDarkTheme}>
            <MainContent>
              {loading && <div>Загрузка задач...</div>}
              {error && <div>{error}</div>}
              {!loading &&
                !error &&
                columns.map((col) => (
                  <ColumnComponent
                    key={col.title}
                    title={col.title}
                    cards={col.cards}
                    isDarkTheme={isDarkTheme}
                  />
                ))}
            </MainContent>
          </S.Mainblock>
        </S.Container>
      </S.MainComponent>
    </>
  );
}

export default MainPage;
