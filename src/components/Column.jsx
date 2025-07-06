import React, { useState, useEffect } from "react";
import CardComponent from "./Card";
import CardsLoader from "../CardsLoader";
import { useNavigate } from "react-router-dom";
import * as S from "./Column-styled";

function ColumnComponent({ title, cards, isDarkTheme }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [cards]);

  const handleBrowseClick = (card) => {
    navigate(`/card/${card.id}`);
  };

  return (
    <S.ColumnWrapper>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.CardsBlock>
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
      </S.CardsBlock>
      {/* PopBrowseComponent теперь должен быть на уровне роутинга */}
    </S.ColumnWrapper>
  );
}

export default ColumnComponent;
