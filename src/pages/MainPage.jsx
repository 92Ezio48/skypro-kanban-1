import HeaderComponent from "../components/header";
import ColumnComponent from "../components/Column";
import { cardList } from "../data.js";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { MainComponent, Container, Mainblock } from "../styled-components.js";
import { MainContent } from "../GlobalStyles.js";
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

function MainPage({ isDarkTheme, setIsDarkTheme }) {
  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkTheme]);

  return (
    <>
      <HeaderComponent
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
      />
      <MainComponent $isDarkTheme={isDarkTheme} />
      <Container $isDarkTheme={isDarkTheme}>
        <Mainblock $isDarkTheme={isDarkTheme}>
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
        </Mainblock>
      </Container>
      <Outlet /> {/* <-- Место появления всех модалок по вложенным роутам */}
    </>
  );
}

export default MainPage;
