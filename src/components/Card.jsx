import {
  CardItem,
  CardInner,
  CardGroup,
  CardTheme,
  CardThemeP,
  CardBtn,
  CardBtnDot,
  CardTitle,
  CardContent,
  CardDate,
} from "./Card-styled";

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
    <CardItem>
      {/* ВАЖНО: Передавай isDarkTheme внутрь CardInner */}
      <CardInner $isDarkTheme={isDarkTheme}>
        <CardGroup>
          <CardTheme $bg={$bgColor} color={textColor}>
            <CardThemeP>{theme}</CardThemeP>
          </CardTheme>
          <CardBtn onClick={onBrowseClick}>
            <CardBtnDot />
            <CardBtnDot />
            <CardBtnDot />
          </CardBtn>
        </CardGroup>
        <CardContent>
          <CardTitle $isDone={$isDone} $isDarkTheme={isDarkTheme}>
            {title}
          </CardTitle>
          <CardDate>
            <p>{date}</p>
          </CardDate>
        </CardContent>
      </CardInner>
    </CardItem>
  );
}
export default CardComponent;
