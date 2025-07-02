import HeaderComponent from "../components/header";
import PopbrowseComponent from "../components/pop-browse";
import PopnewcardComponent from "../components/pop-new-card";
import ColumnComponent from "../components/Column";
import PopexitComponent from "../components/Pop-exit";
import { cardList } from "../data.js";
import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { MainComponent, Container, Mainblock } from "../styled-components.js";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const columns = statuses.map((status) => ({
  title: status,
  cards: cardList.filter((card) => card.status === status),
}));

// 👇 Добавили пропсы для темы
function MainPage({ isDarkTheme, setIsDarkTheme }) {
  const [showExit, setShowExit] = useState(false);

  // Смена темы на уровне <body>
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <>
      {/* pop-up start */}
      {showExit && <PopexitComponent onClose={() => setShowExit(false)} />}
      <PopnewcardComponent />
      <PopbrowseComponent />
      {/* pop-up end */}

      <HeaderComponent
        onExitClick={() => setShowExit(true)}
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <MainComponent $isDarkTheme={isDarkTheme} />
      <Container $isDarkTheme={isDarkTheme}>
        <Mainblock $isDarkTheme={isDarkTheme}>
          <div className="main__content">
            {columns.map((col) => (
              <ColumnComponent
                key={col.title}
                title={col.title}
                cards={col.cards}
                isDarkTheme={isDarkTheme}
              />
            ))}
          </div>
        </Mainblock>
      </Container>
      <Outlet />
      <MainComponent $isDarkTheme={isDarkTheme} />
    </>
  );
}

export default MainPage;
