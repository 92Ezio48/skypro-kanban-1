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
// Обертка popup
export const PopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;

// Затемнение
export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

// Белый блок
export const PopBrowseBlock = styled.div`
  margin: 0 auto;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#1a2230" : " #eaeef6;"};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "0.7px solid #222e3a" : "0.7px solid #d4dbe5"};
  position: relative;
  @media (max-width: 600px) {
    max-width: 370px;
    padding: 22px 7px 28px;
    min-width: 0;
  }
`;

// Заголовок и тег
export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  /* 👉 Модификатор для статуса  */
  ${({ $TopBlockStatus }) =>
    $TopBlockStatus &&
    `
    gap: 14px;
        flex-direction: column;
        align-items: flex-start;
    `}
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
  }
`;

export const Title = styled.h3`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;
const categoryBgColors = {
  Research: "rgb(180, 253, 209)",
  Copywriting: "rgb(233, 212, 255)",
  "Web Design": "rgb(255, 228, 194)",
};
const categoryTextColors = {
  Research: "rgb(6, 177, 110)",
  Copywriting: "rgb(154, 72, 241)",
  "Web Design": "rgb(255, 109, 0)",
};
export const CategoryTag = styled.div`
  display: inline-block;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  @media (max-width: 600px) {
    margin-bottom: 6px;
    padding: 8px 12px;
  }
  background-color: ${({ $categoryName }) =>
    categoryBgColors[$categoryName] || "#94a6be"};
  color: ${({ $categoryName }) => categoryTextColors[$categoryName] || "#fff"};
`;

// Статус
export const StatusBlock = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    gap: 4px;
  }
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: ${({ active }) => (active ? "#fff" : "#94a6be")};
  background: ${({ active, color }) =>
    active && color === "gray" ? "#94a6be" : "transparent"};
  display: ${({ hide }) => (hide ? "none" : "block")};
  font-size: 14px;
  font-weight: 600;
`;

// Форма-описание
export const DescriptionForm = styled.form`
  max-width: 370px;
  width: 100%;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;
export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DescLabel = styled.label`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 14px;
  font-weight: 600;
`;
export const DescriptionArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#1a2230" : " #eaeef6;"};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;
  @media (max-width: 600px) {
    font-size: 14px;
    min-width: 0;
    padding: 12px 7px;
    height: 35px;
  }
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  &::placeholder {
    color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
    font-size: 14px;
  }
  /* 👉 Модификатор для поля-названия (input) */
  ${({ $titleInput }) =>
    $titleInput &&
    `
      height: 40px;
      min-height: 32px;
      max-height: 52px;
      font-size: 24px;
      font-weight: 600;
      padding: 4px 10px;
      margin-top: 0;
      resize: none;
    `}
`;

// Кнопки
export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
  justify-content: space-between;
  @media (max-width: 600px) {
    width: 100%;
    gap: 6px;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
  }
`;

export const BrowseButton = styled.button`
  height: 30px;
  padding: 0 14px;
  margin-left: ${({ $marginLeft }) => $marginLeft || "0"};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  width: ${({ $width }) => $width || "auto"};
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0 !important;
    margin-bottom: 6px;
  }

  /* --- Цвет фона --- */
  background: ${({ $variant, $isDarkTheme }) => {
    if ($variant === "bg") {
      return $isDarkTheme ? "#414584" : "#565eef"; // Тёмно-синий для тёмной темы
    }
    return "transparent";
  }};

  /* --- Цвет текста --- */
  color: ${({ $variant, $isDarkTheme }) => {
    if ($variant === "bg") return "#fff";
    return $isDarkTheme ? "#fff" : "#565eef";
  }};

  /* --- Граница --- */
  border: ${({ $variant, $isDarkTheme }) => {
    if ($variant === "bor") {
      return $isDarkTheme
        ? "0.7px solid #444c5e" // Более тёмная рамка
        : "0.7px solid #565eef";
    }
    return "none";
  }};

  transition: background 0.18s, color 0.18s, border 0.18s;

  &:hover {
    background: ${({ $variant }) =>
      $variant === "bor" ? "#33399b" : "#4e51a3"};
    color: #fff;
    border: ${({ $variant, $isDarkTheme }) => {
      if ($variant === "bor") {
        return $isDarkTheme ? "0.7px solid #fff" : "0.7px solid #fff";
      }
      return "none";
    }};
  }
`;
export const PopBrowseGeneral = styled.div``;
export const PopBrowseFHalf = styled.div``;
export const MidBlock = styled.div`
  display: flex;
  gap: 21px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;
export const TopHalfBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const StatusBadge = styled.span`
  display: flex;
  height: 30px;
  margin-left: ${({ $editMargin, $noMargin }) => {
    if ($editMargin) return "40px"; // тут свой кастомный марджин для страницы редактирования
    if ($noMargin) return "0px";
    return "169px"; // дефолтный марджин
  }};
  padding: 8px 20px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(255, 255, 255);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0%;
  text-align: center;
  background-color: rgb(148, 166, 190);
  color: ${({ $categoryName }) => categoryTextColors[$categoryName] || "#fff"};
  align-items: center;
`;
export const EditStatusRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin: 16px 0 24px 0;
  flex-direction: column;
`;

export const StatusButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    justify-content: flex-start;
  }
`;

export const StatusChoiceButton = styled.button`
  all: unset; // <-- сбрасывает ВСЁ (почти всегда это именно то, что надо)
  white-space: nowrap;
  display: flex;
  align-items: center;
  height: 30px;
  padding: 0px 15px;
  border-radius: 24px;
  font-size: 14px;
  font-weight: 400;
  font-family: Roboto, Arial, sans-serif;
  justify-content: center;

  border: none;
  margin: 0;
  cursor: pointer;
  background: ${({ $active, $variant, $isDarkTheme }) => {
    if ($active) {
      // Цвет активной кнопки: свой для тёмной и светлой темы
      return $isDarkTheme ? "#494b5b" : "#C7C7C7";
    }
    if ($variant === "bg") {
      // Цвет bg-кнопки: основной для темы
      return $isDarkTheme ? "#414584" : "#565eef";
    }
    return "transparent";
  }};
  color: ${({ $active, $isDarkTheme }) => {
    if ($active) {
      // Активное: почти чёрный в светлой, почти белый/синий в тёмной теме
      return $isDarkTheme ? "#fff" : "#222";
    }
    // Неактивное: посветлее в светлой, такой же фиолетовый в темной
    return $isDarkTheme ? "rgb(148, 166, 190)" : "#606D80";
  }};
  box-shadow: 0 0 0 1px #c7c7c7 inset;
  transition: background 0.15s, color 0.15s;

  &:not(:last-child) {
  }

  &:disabled {
    cursor: default;
  }
`;

export const EditMainRow = styled.div`
  display: flex;
  gap: 21px;
  align-items: stretch;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 14px;
  }
`;

export const EditDescCol = styled.div`
  width: 100%;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const EditCalendarCol = styled.div``;
export const BtnLeftGroup = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6px;
    width: 100%;
  }
`;
