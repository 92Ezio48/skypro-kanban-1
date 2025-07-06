import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Header-styled";

function HeaderComponent({ isDarkTheme, setIsDarkTheme }) {
  const navigate = useNavigate();
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const user = {
    name: "Ivan Ivanov",
    email: "ivan.ivanov@gmail.com",
  };

  return (
    <S.StyledHeader $isDarkTheme={isDarkTheme}>
      <S.Container>
        <S.HeaderBlock $isDarkTheme={isDarkTheme}>
          <S.LogoWrap>
            <a href="/" target="_self">
              <img
                src={isDarkTheme ? "images/logo_dark.png" : "images/logo.png"}
                alt="logo"
              />
            </a>
          </S.LogoWrap>
          <S.NavWrap $isDarkTheme={isDarkTheme}>
            <S.NewTaskButton
              id="btnMainNew"
              onClick={() => navigate("/create")}
            >
              Создать новую задачу
            </S.NewTaskButton>
            <S.UserSpan
              $isDarkTheme={isDarkTheme}
              onClick={() => setIsUserPopupOpen((open) => !open)}
            >
              {user.name}
            </S.UserSpan>
            <S.UserPopup $isDarkTheme={isDarkTheme} open={isUserPopupOpen}>
              <S.PopupName $isDarkTheme={isDarkTheme}>{user.name}</S.PopupName>
              <S.PopupMail>{user.email}</S.PopupMail>
              <S.PopupTheme $isDarkTheme={isDarkTheme}>
                <p>Темная тема</p>
                <S.ToggleSwitchLabel>
                  <S.ToggleSwitchCheckbox
                    className="checkbox"
                    name="checkbox"
                    type="checkbox"
                    checked={isDarkTheme}
                    onChange={() => setIsDarkTheme((prev) => !prev)}
                  />
                  <S.ToggleSwitchSlider $isDarkTheme={isDarkTheme} />
                </S.ToggleSwitchLabel>
              </S.PopupTheme>
              <S.PopupLogoutButton
                type="button"
                onClick={() => {
                  navigate("/exit-confirm");
                  setIsUserPopupOpen(false);
                }}
              >
                Выйти
              </S.PopupLogoutButton>
            </S.UserPopup>
          </S.NavWrap>
        </S.HeaderBlock>
      </S.Container>
    </S.StyledHeader>
  );
}

export default HeaderComponent;
