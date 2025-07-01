import HeaderComponent from "../components/header";
import PopbrowseComponent from "../components/pop-browse";
import PopnewcardComponent from "../components/pop-new-card";
import ColumnComponent from "../components/Column";
import PopexitComponent from "../components/Pop-exit";
import { cardList } from "../data.js";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
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

function MainPage() {
  const [showExit, setShowExit] = useState(false);
  return (
    <>
      {/* pop-up start*/}
      {showExit && <PopexitComponent onClose={() => setShowExit(false)} />}
      <PopnewcardComponent />
      <PopbrowseComponent />
      {/* pop-up end*/}

      <HeaderComponent onExitClick={() => setShowExit(true)} />
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              {columns.map((col) => (
                <ColumnComponent
                  key={col.title}
                  title={col.title}
                  cards={col.cards}
                />
              ))}
            </div>
          </div>
        </div>
        <Outlet />
      </main>
    </>
  );
}

export default MainPage;
