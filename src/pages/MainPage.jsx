import HeaderComponent from "../components/Header.jsx";
import ColumnComponent from "../components/Column";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../styled-components.js";
import { MainContent } from "../GlobalStyles.js";
import { fetchTasks } from "../services/api.js";
import { TasksProvider } from "../context/TasksProvider.jsx";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

function MainPage({ isDarkTheme, setIsDarkTheme }) {
  const [tasks, setTasks] = useState([]);

  // Загружаем задачи один раз и при необходимости перезагрузки
  const loadTasks = async () => {
    try {
      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";
      const fetchedTasks = await fetchTasks({ token }); // корректно брать токен отсюда!
      setTasks(fetchedTasks);
    } catch (error) {
      console.error(error);
    }
  };

  // Темная тема
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  // Загружаем задачи при маунте
  useEffect(() => {
    loadTasks();
  }, []);

  // Коллбек для PopnewcardComponent
  const handleTaskCreated = () => {
    loadTasks();
  };

  const columns = statuses.map((status) => ({
    title: status,
    cards: tasks.filter((card) => card.status === status),
  }));

  return (
    <TasksProvider>
      <>
        <HeaderComponent
          isDarkTheme={isDarkTheme}
          setIsDarkTheme={setIsDarkTheme}
        />
        <S.MainComponent $isDarkTheme={isDarkTheme}>
          <S.Container $isDarkTheme={isDarkTheme}>
            <S.Mainblock $isDarkTheme={isDarkTheme}>
              <MainContent>
                {columns.map((col) => (
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
        <Outlet context={{ onTaskCreated: handleTaskCreated }} />
        {/* outletContext позволяет вложенной странице получить функцию handleTaskCreated */}
      </>
    </TasksProvider>
  );
}

export default MainPage;
