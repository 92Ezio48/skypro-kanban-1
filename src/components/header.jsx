import React, { useState } from "react";
function HeaderComponent() {
  const [isUserPopupOpen, setIsUserPopupOpen] = useState(false);
  const user = {
    name: "Ivan Ivanov",
    email: "ivan.ivanov@gmail.com",
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="/" target="_self">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="header__logo _dark">
            <a href="/" target="_self">
              <img src="images/logo_dark.png" alt="logo" />
            </a>
          </div>
          <nav className="header__nav">
            <button className="header__btn-main-new _hover01" id="btnMainNew">
              <a href="#popNewCard">Создать новую задачу</a>
            </button>
            {/* Клик по пользователю открывает popup */}
            <span
              className="header__user _hover02"
              style={{ cursor: "pointer" }}
              onClick={() => setIsUserPopupOpen((open) => !open)}
            >
              {user.name}
            </span>
            {/* Popup - появляется по клику */}
            <div
              className="header__pop-user-set pop-user-set"
              style={{
                display: isUserPopupOpen ? "block" : "none",
                position: "absolute", // по желанию
                right: 6, // по желанию
                zIndex: 10, // по желанию
              }}
            >
              <p className="pop-user-set__name">{user.name}</p>
              <p className="pop-user-set__mail">{user.email}</p>
              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" className="checkbox" name="checkbox" />
              </div>
              <button
                type="button"
                className="_hover03"
                style={{ marginTop: "8px" }}
              >
                <a href="#popExit">Выйти</a>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
