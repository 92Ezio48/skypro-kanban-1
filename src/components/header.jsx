import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledHeader,
  HeaderBlock,
  LogoWrap,
  NavWrap,
  NewTaskButton,
  UserSpan,
  UserPopup,
  PopupName,
  PopupMail,
  PopupTheme,
  PopupLogoutButton,
  ToggleSwitchLabel,
  ToggleSwitchCheckbox,
  ToggleSwitchSlider,
} from "./Header-styled";

function HeaderComponent() {
  const navigate = useNavigate();
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const user = {
    name: "Ivan Ivanov",
    email: "ivan.ivanov@gmail.com",
  };
  function handleLogoutClick() {
    setIsUserPopupOpen(false); // Закрыть попап пользователя!
    navigate("/exit"); // переходи на страницу выхода
  }
  return (
    <StyledHeader>
      <div className="container">
        <HeaderBlock>
          <LogoWrap>
            <a href="/" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </LogoWrap>
          <NavWrap>
            <NewTaskButton id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </NewTaskButton>
            <UserSpan onClick={() => setIsUserPopupOpen((open) => !open)}>
              {user.name}
            </UserSpan>
            <UserPopup open={isUserPopupOpen}>
              <PopupName>{user.name}</PopupName>
              <PopupMail>{user.email}</PopupMail>
              <PopupTheme>
                <p>Темная тема</p>
                <ToggleSwitchLabel>
                  <ToggleSwitchCheckbox className="checkbox" name="checkbox" />
                  <ToggleSwitchSlider />
                </ToggleSwitchLabel>
              </PopupTheme>
              <PopupLogoutButton type="button" onClick={handleLogoutClick}>
                Выйти
              </PopupLogoutButton>
            </UserPopup>
          </NavWrap>
        </HeaderBlock>
      </div>
    </StyledHeader>
  );
}

export default HeaderComponent;
