import React, { useState, useEffect } from "react";
import CardComponent from "./Card";
import CardsLoader from "../CardsLoader";
function ColumnComponent({ title, cards }) {
  const [loading, setLoading] = useState(true);
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
          <CardsLoader /> // Показываем индикатор загрузки
        ) : (
          cards.map((card) => (
            <CardComponent
              key={card.id}
              theme={card.theme}
              title={card.title}
              date={card.date}
              status={card.status}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default ColumnComponent;
