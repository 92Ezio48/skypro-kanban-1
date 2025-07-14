import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./SignInPage-styled";
import { AuthContext } from "../context/AuthContext";

function SignInPage({ isDarkTheme, setIsDarkTheme }) {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [userLogin, setUserLogin] = useState("");
  const [password, setPassword] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Сброс ошибок
    setLoginError(false);
    setPasswordError(false);
    setGlobalError("");

    try {
      await login({ login: userLogin, password });
      navigate("/");
    } catch (err) {
      // error message может быть из сервера (например, "Неверный логин или пароль")
      const errMsg = err.message || "Ошибка при входе.";

      // Разделяем виды ошибок по содержанию сообщения:
      // Если может быть конкретика (например, что не так – пароль или логин), распарси:
      const isLoginError =
        errMsg.toLowerCase().includes("логин") ||
        errMsg.toLowerCase().includes("user");
      const isPasswordError =
        errMsg.toLowerCase().includes("пароль") ||
        errMsg.toLowerCase().includes("password");

      // Во многих API сообщение общее – "неверный логин или пароль"
      // тогда выделяем оба поля
      if (isLoginError && !isPasswordError) {
        setLoginError(true);
      } else if (!isLoginError && isPasswordError) {
        setPasswordError(true);
      } else if (isLoginError && isPasswordError) {
        setLoginError(true);
        setPasswordError(true);
      } else {
        // Если нет точности – красим оба поля (или только логин по желанию)
        setLoginError(true);
        setPasswordError(true);
      }
      setGlobalError(errMsg);
    }
  };

  // Сброс ошибок при вводе
  const handleLoginChange = (e) => {
    setUserLogin(e.target.value);
    setLoginError(false);
    setGlobalError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(false);
    setGlobalError("");
  };

  return (
    <S.LoginWrapper $isDarkTheme={isDarkTheme} $setIsDarkTheme={setIsDarkTheme}>
      <S.LoginContainer $isDarkTheme={isDarkTheme}>
        <S.LoginTitle $isDarkTheme={isDarkTheme}>Вход</S.LoginTitle>
        <S.LoginForm onSubmit={handleLogin}>
          <S.LoginInput
            type="text"
            placeholder="Эл. почта"
            autoComplete="username"
            value={userLogin}
            onChange={handleLoginChange}
            required
            $hasError={loginError}
            $isDarkTheme={isDarkTheme}
          />
          <S.LoginInput
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
            value={password}
            onChange={handlePasswordChange}
            required
            $hasError={passwordError}
            $isDarkTheme={isDarkTheme}
          />
          {globalError && <S.ErrorText>{globalError}</S.ErrorText>}
          <S.LoginButton type="submit">Войти</S.LoginButton>
        </S.LoginForm>
        <S.RegisterText>
          Нужно зарегистрироваться?{" "}
          <S.StyledRegisterLink as={Link} to="/register">
            Регистрируйтесь здесь
          </S.StyledRegisterLink>
        </S.RegisterText>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
}

export default SignInPage;
