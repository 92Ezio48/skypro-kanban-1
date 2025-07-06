import HeaderComponent from "../components/Header.jsx";
import ColumnComponent from "../components/Column";
import { cardList } from "../CardData.js";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import * as S from "../styled-components.js";
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
      <Outlet /> {/* <-- Место появления всех модалок по вложенным роутам */}
    </>
  );
}

export default MainPage;
