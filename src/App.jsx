import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyles.js";
import { Wrapper } from "./styled-components.js";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
  // Глобальный state темы
  const [isDarkTheme, setIsDarkTheme] = useState(false);

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
