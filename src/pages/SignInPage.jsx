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

function SignInPage() {
  const navigate = useNavigate();

  // Обработчик "войти"
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "testtoken");
    navigate("/");
  };

  return (
    <LoginWrapper>
      <LoginContainer>
        <LoginTitle>Вход в аккаунт</LoginTitle>
        <LoginForm onSubmit={handleLogin}>
          <LoginInput
            type="text"
            placeholder="Логин"
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
          Нет аккаунта?{" "}
          <StyledRegisterLink as={Link} to="/register">
            Зарегистрироваться
          </StyledRegisterLink>
        </RegisterText>
      </LoginContainer>
    </LoginWrapper>
  );
}

export default SignInPage;
