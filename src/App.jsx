import "./App.css";
import HeaderComponent from "./components/header";
import PopbrowseComponent from "./components/pop-browse";
import PopnewcardComponent from "./components/pop-new-card";
import ColumnComponent from "./components/Column";
import { GlobalStyle } from "./GlobalStyles.js";
import PopexitComponent from "./components/Pop-exit";
import { cardList } from "./data.js";
function App() {
  // Формируем массивы карточек по статусу:
  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  // Для каждой колонки — свои карточки:
  const columns = statuses.map((status) => ({
    title: status,
    cards: cardList.filter((card) => card.status === status),
  }));

  return (
    <div className="wrapper">
      <GlobalStyle />
      {/* pop-up start*/}
      <PopexitComponent />
      <PopnewcardComponent />
      <PopbrowseComponent />
      {/* pop-up end*/}

      <HeaderComponent />
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
      </main>
    </div>
  );
}
export default App;
