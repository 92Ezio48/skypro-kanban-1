import * as S from "./Card-styled";
import { themeColors } from "./Card-styled";
// Функция для форматирования даты
function formatDate(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return ""; // если невалидная дата
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear().toString().slice(-2);
  return `${day}.${month}.${year}`;
}
function CardComponent({
  topic, // <--- Поменяй здесь!
  title,
  date,
  status,
  onBrowseClick,
  isDarkTheme,
}) {
  const { bg, color } = themeColors[topic] || { bg: "#e0e0e0", color: "#000" }; // <--- И здесь!
  const $isDone = status === "Готово";

  return (
    <S.CardItem>
      <S.CardInner $isDarkTheme={isDarkTheme}>
        <S.CardGroup>
          <S.CardTheme $bg={bg} color={color}>
            <S.CardThemeP>{topic}</S.CardThemeP>
          </S.CardTheme>
          <S.CardBtn onClick={onBrowseClick}>
            <S.CardBtnDot />
            <S.CardBtnDot />
            <S.CardBtnDot />
          </S.CardBtn>
        </S.CardGroup>
        <S.CardContent>
          <S.CardTitle $isDone={$isDone} $isDarkTheme={isDarkTheme}>
            {title}
          </S.CardTitle>
          <S.CardDate>
            <img
              src={
                isDarkTheme
                  ? "/images/calendar-clear-outline.svg"
                  : "images/calendar-clear-outline.svg"
              }
              alt="logo"
            />
            <span>{formatDate(date)}</span>
          </S.CardDate>
        </S.CardContent>
      </S.CardInner>
    </S.CardItem>
  );
}

export default CardComponent;
