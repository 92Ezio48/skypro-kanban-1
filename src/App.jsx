import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyles.js";
import { Wrapper } from "./styled-components.js";

function App() {
  // Глобальный state темы
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Глобальный state авторизации
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Wrapper $isDarkTheme={isDarkTheme}>
      <GlobalStyle $isDarkTheme={isDarkTheme} />
      {/* Прокидываем темы и авторизацию */}
      <AppRoutes
        isDarkTheme={isDarkTheme}
        setIsDarkTheme={setIsDarkTheme}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
    </Wrapper>
  );
}

export default App;
