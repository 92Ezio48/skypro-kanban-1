import styled from "styled-components";

// Обёртка хедера
export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#222e3a" : "rgb(255, 255, 255);"};
`;
// Контейнер
export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;
// Логотип
export const LogoWrap = styled.div`
  & img {
    width: 85px;
  }
`;
// Навигация
export const NavWrap = styled.nav`
  width: 281.5px;
  height: 30px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// Кнопка создания задачи
export const NewTaskButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  & a {
    color: #ffffff;
    text-decoration: none;
  }
`;
// Пользователь
export const UserSpan = styled.span`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(255, 255, 255)" : "#565eef"};
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid #565eef;
    border-bottom: 1.9px solid #565eef;
    transform: rotate(-45deg);
    margin: -6px 0 0 5px;
    padding: 0;
  }
`;
// Попап пользователя
export const UserPopup = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#222e3a" : "rgb(255, 255, 255);"};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 10;
`;
// Вспомогательные стили для текста в попапе
export const PopupName = styled.p`
  font-weight: bold;
  margin-bottom: 8px;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(255, 255, 255)" : "#222e3a"};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;
`;

export const PopupMail = styled.p`
  color: #94a6be;
  margin-bottom: 16px;
  margin-right: 20px;
  color: rgb(148, 166, 190);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;
`;

export const PopupTheme = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(255, 255, 255)" : "#222e3a"};
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;

  & p {
    margin: 0;
  }
`;

export const PopupLogoutButton = styled.button`
  background: none;
  border: none;
  color: #565eef;
  font-size: 14px;
  margin-top: 8px;
  cursor: pointer;
  box-sizing: border-box;
  border: 1px solid rgb(86, 94, 239);
  border-radius: 4px;
  width: 72px;
  height: 30px;

  & a {
    color: #565eef;
    text-decoration: none;
  }
  &:hover {
    background-color: #565eef;
    color: #ffffff;
    border: 0.7px solid rgb(86, 94, 239);
  }
`;
// Обёртка для ползунка
export const ToggleSwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 34px;
  height: 18px;
`;

export const ToggleSwitchCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #565eef;
  }

  &:checked + span:before {
    transform: translateX(16px);
  }
`;

export const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    transition: 0.4s;
    border-radius: 50%;
  }
`;
