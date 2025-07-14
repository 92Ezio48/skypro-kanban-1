import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyles.js";
import { Wrapper } from "./styled-components.js";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
  // ← Инициализация из localStorage
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const stored = localStorage.getItem("kanban-theme");
    return stored === "true"; // true если строка "true", иначе false
  });

  // ← Сохранять значение при каждом изменении темы
  React.useEffect(() => {
    localStorage.setItem("kanban-theme", String(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <AuthProvider>
      <Wrapper $isDarkTheme={isDarkTheme}>
        <GlobalStyle $isDarkTheme={isDarkTheme} />
        <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
      </Wrapper>
    </AuthProvider>
  );
}

export default App;
