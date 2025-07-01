import React from "react";
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  StyledRegisterLink,
} from "./Login.styled";

const Login = () => (
  <LoginWrapper>
    <LoginContainer>
      <LoginTitle>Вход в аккаунт</LoginTitle>
      <LoginForm>
        <LoginInput type="text" placeholder="Email" autoComplete="username" />
        <LoginInput
          type="password"
          placeholder="Пароль"
          autoComplete="current-password"
        />
        <LoginButton type="submit">Войти</LoginButton>
      </LoginForm>
      <StyledRegisterLink href="/register">
        Нет аккаунта? Зарегистрироваться
      </StyledRegisterLink>
    </LoginContainer>
  </LoginWrapper>
);

export default Login;
