import React, { useState, useEffect } from "react";
import CardComponent from "./Card";
import CardsLoader from "../CardsLoader";
import { useNavigate } from "react-router-dom";
import PopbrowseComponent from "./pop-browse"; // импортируй модалку
function ColumnComponent({ title, cards }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  // 👇 Состояния для модалки
  const [isBrowseOpen, setBrowseOpen] = useState(false);
  const [selectedCard] = useState(null);
  useEffect(() => {
    // Имитация загрузки только для карточек этой колонки
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [cards]); // можно добавить зависимость, если cards могут меняться
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {loading ? (
          <CardsLoader />
        ) : (
          cards.map((card) => (
            <CardComponent
              key={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
              // 👇 Прокидывай обработчик клика и всю карточку
              onBrowseClick={() => navigate(`/card/${card.id}`)}
            />
          ))
        )}
      </div>
      {/* Модалка для просмотра карточки */}
      <PopbrowseComponent
        isOpen={isBrowseOpen}
        onClose={() => setBrowseOpen(false)}
        card={selectedCard} // <-- передаём выбранную карточку!
      />
    </div>
  );
}
export default ColumnComponent;
