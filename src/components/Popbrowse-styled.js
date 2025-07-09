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
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

// Заголовок и тег
export const TopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  color: #000;
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

  background-color: ${({ categoryName }) =>
    categoryBgColors[categoryName] || "#94a6be"};
  color: ${({ categoryName }) => categoryTextColors[categoryName] || "#fff"};
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
`;
export const DescBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DescLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
`;
export const DescriptionArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
  resize: vertical;
  color: #333;
  &::placeholder {
    color: #94a6be;
    font-size: 14px;
  }
`;

// Кнопки
export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
`;

export const BrowseButton = styled.button`
  height: 30px;
  padding: 0 14px;
  margin-left: ${({ $variant }) => ($variant === "bg" ? `169px` : `0px`)};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  width: ${({ $width }) => $width || "auto"};
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  background: ${({ $variant }) =>
    $variant === "bg" ? "#565eef" : "transparent"};
  color: ${({ $variant }) => ($variant === "bg" ? "#fff" : "#565eef")};
  border: ${({ $variant }) =>
    $variant === "bor" ? "0.7px solid #565eef" : "none"};
  transition: background 0.18s, color 0.18s;
  &:hover {
    background: #33399b;
    color: #fff;
  }
`;
export const PopBrowseGeneral = styled.div``;
export const PopBrowseFHalf = styled.div``;
export const MidBlock = styled.div`
  display: flex;
  gap: 21px;
`;
