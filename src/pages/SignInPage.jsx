import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  RegisterText,
  StyledRegisterLink,
} from "../pages/Login.styled";

// ⬇️ Обязательно получаем setIsAuth как пропс
function SignInPage({ setIsAuth }) {
  const navigate = useNavigate();

  // Обработчик "войти"
  const handleLogin = (e) => {
    e.preventDefault();
    // Сохраним токен (для совместимости, см. ProtectedRoute)
    localStorage.setItem("token", "testtoken");
    // 👉 ОБЯЗАТЕЛЬНО меняем глобальный isAuth
    setIsAuth(true);
    navigate("/");
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginTitle>Вход</LoginTitle>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="text"
            placeholder="Эл. почта"
            autoComplete="username"
            required
          />
          <LoginInput
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
            required
          />
          <LoginButton type="submit">Войти</LoginButton>
        </LoginForm>
        <RegisterText>
          Нужно зарегистрироваться?{" "}
          <StyledRegisterLink as={Link} to="/register">
            Регистрируйтесь здесь
          </StyledRegisterLink>
        </RegisterText>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default SignInPage;
