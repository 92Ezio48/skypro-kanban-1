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
  Container,
} from "./Header-styled";

function HeaderComponent({ isDarkTheme, setIsDarkTheme }) {
  const navigate = useNavigate();
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const user = {
    name: "Ivan Ivanov",
    email: "ivan.ivanov@gmail.com",
  };

  return (
    <StyledHeader $isDarkTheme={isDarkTheme}>
      <Container>
        <HeaderBlock $isDarkTheme={isDarkTheme}>
          <LogoWrap>
            <a href="/" target="_self">
              <img
                src={isDarkTheme ? "images/logo_dark.png" : "images/logo.png"}
                alt="logo"
              />
            </a>
          </LogoWrap>
          <NavWrap $isDarkTheme={isDarkTheme}>
            <NewTaskButton id="btnMainNew" onClick={() => navigate("/create")}>
              Создать новую задачу
            </NewTaskButton>
            <UserSpan
              $isDarkTheme={isDarkTheme}
              onClick={() => setIsUserPopupOpen((open) => !open)}
            >
              {user.name}
            </UserSpan>
            <UserPopup $isDarkTheme={isDarkTheme} open={isUserPopupOpen}>
              <PopupName $isDarkTheme={isDarkTheme}>{user.name}</PopupName>
              <PopupMail>{user.email}</PopupMail>
              <PopupTheme $isDarkTheme={isDarkTheme}>
                <p>Темная тема</p>
                <ToggleSwitchLabel>
                  <ToggleSwitchCheckbox
                    className="checkbox"
                    name="checkbox"
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={() => setIsDarkTheme((prev) => !prev)}
                  />
                  <ToggleSwitchSlider $isDarkTheme={isDarkTheme} />
                </ToggleSwitchLabel>
              </PopupTheme>
              <PopupLogoutButton
                type="button"
                onClick={() => {
                  navigate("/exit-confirm");
                  setIsUserPopupOpen(false);
                }}
              >
                Выйти
              </PopupLogoutButton>
            </UserPopup>
          </NavWrap>
        </HeaderBlock>
      </Container>
    </StyledHeader>
  );
}
export default HeaderComponent;
