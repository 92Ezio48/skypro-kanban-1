import React, { useState } from "react";
import AppRoutes from "./AppRoutes";
import { GlobalStyle } from "./GlobalStyles.js";
import { Wrapper } from "./styled-components.js";

function App() {
  // Глобальный state темы
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <Wrapper $isDarkTheme={isDarkTheme}>
      {/* Глобальные стили с темой */}
      <GlobalStyle $isDarkTheme={isDarkTheme} />
      {/* Прокидываем пропсы темы (ТОЛЬКО ТАК! не через $) */}
      <AppRoutes isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme} />
    </Wrapper>
  );
}

export default App;
