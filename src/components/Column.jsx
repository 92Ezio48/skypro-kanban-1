import React from "react";
import CardComponent from "./Card"; // default экспорт!
import CardsLoader from "../CardsLoader"; // default экспорт!
import { useNavigate } from "react-router-dom";
import * as S from "./Column-styled"; // если это styled-components

function ColumnComponent({ title, cards, isDarkTheme, loading }) {
  const navigate = useNavigate();

  const handleBrowseClick = (card) => {
    navigate(`/card/${card._id}`);
  };

  return (
    <S.ColumnWrapper>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.CardsBlock>
        {loading ? (
          <>
            <CardsLoader isDarkTheme={isDarkTheme} />
            <CardsLoader isDarkTheme={isDarkTheme} />
            <CardsLoader isDarkTheme={isDarkTheme} />
          </>
        ) : (
          cards.length > 0 &&
          cards.map((card) => (
            <CardComponent
              key={card._id}
              topic={card.topic}
              title={card.title}
              date={card.date}
              status={card.status}
              onBrowseClick={() => handleBrowseClick(card)}
              isDarkTheme={isDarkTheme}
            />
          ))
        )}
      </S.CardsBlock>
    </S.ColumnWrapper>
  );
}

export default ColumnComponent;
