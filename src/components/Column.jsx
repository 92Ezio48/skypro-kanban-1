import React, { useState, useEffect } from "react";
import CardComponent from "./Card";
import CardsLoader from "../CardsLoader";
import PopbrowseComponent from "./pop-browse";
import { useNavigate } from "react-router-dom";
import { ColumnWrapper, ColumnTitle, CardsBlock } from "./Column-styled";

function ColumnComponent({ title, cards, isDarkTheme }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, [cards]);

  // ⚡️ Исправлено: объявляем handleBrowseClick
  const handleBrowseClick = (card) => {
    navigate(`/card/${card.id}`);
  };

  return (
    <ColumnWrapper>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <CardsBlock>
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
              onBrowseClick={() => handleBrowseClick(card)}
              isDarkTheme={isDarkTheme}
            />
          ))
        )}
      </CardsBlock>
      {/* PopbrowseComponent убираем отсюда, он теперь должен быть на уровне роутинга */}
    </ColumnWrapper>
  );
}

export default ColumnComponent;
