import styled from "styled-components";
export const themeColors = {
  "Web Design": {
    bg: "rgb(255, 228, 194)",
    color: "rgb(255, 109, 0)",
  },
  Research: {
    bg: "rgb(180, 253, 209)",
    color: "color: rgb(6, 177, 110);",
  },
  Copywriting: {
    bg: "rgb(233, 212, 255)",
    color: "rgb(154, 72, 241)",
  },
};
// 1. Обертка карточки
export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

// 2. Внутренности карточки
export const CardInner = styled.div`
  width: 220px;
  height: 130px;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#222e3a" : "rgb(255, 255, 255)"};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

// 3. Группа верхняя
export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

// 4. Тематика с пропами
export const CardTheme = styled.div`
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background: ${({ $bg }) => $bg}; // динамический проп
  color: ${({ color }) => color};
`;

// 5. Текст темы
export const CardThemeP = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
`;

// 6. Кнопки меню
export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const CardBtnDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94a6be;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  margin-bottom: 10px;
  ${({ $isDone }) => $isDone && `text-decoration: line-through;`}
`;

// 8. Контентная часть
export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

// 9. Дата
export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  gap: 7.22px;
  text-align: left;
  svg {
    width: 13px;
  }
  p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
`;
