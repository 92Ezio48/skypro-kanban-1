import * as S from "./Card-styled";

function CardComponent({
  theme,
  title,
  date,
  status,
  onBrowseClick,
  isDarkTheme, // <- приходит пропс из родителя (в ColumnComponent)
}) {
  const themeColors = {
    Research: "rgb(180, 253, 209)",
    Copywriting: "rgb(233, 212, 255)",
    "Web Design": "rgb(255, 228, 194)",
  };
  const themeTextColors = {
    Research: "rgb(6, 177, 110)",
    Copywriting: "rgb(154, 72, 241)",
    "Web Design": "rgb(255, 109, 0)",
  };
  const $bgColor = themeColors[theme] || "#e0e0e0";
  const textColor = themeTextColors[theme] || "#000";
  const $isDone = status === "Готово";

  return (
    <S.CardItem>
      <S.CardInner $isDarkTheme={isDarkTheme}>
        <S.CardGroup>
          <S.CardTheme $bg={$bgColor} color={textColor}>
            <S.CardThemeP>{theme}</S.CardThemeP>
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
            <p>{date}</p>
          </S.CardDate>
        </S.CardContent>
      </S.CardInner>
    </S.CardItem>
  );
}

export default CardComponent;
