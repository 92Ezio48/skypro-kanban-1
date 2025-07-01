import React from "react";
import {
  LoginWrapper,
  LoginContainer,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
  RegisterText,
  StyledRegisterLink,
} from "./Login.styled";

const SignUpPage = () => (
  <LoginWrapper>
    <LoginContainer>
      <LoginTitle>Регистрация</LoginTitle>
      <LoginForm>
        <LoginInput type="text" placeholder="Имя" required />
        <LoginInput
          type="password"
          placeholder="Пароль"
          autoComplete="new-password"
          required
        />
        <LoginButton type="submit">Зарегистрироваться</LoginButton>
      </LoginForm>
      <RegisterText>
        Уже есть аккаунт?{" "}
        <StyledRegisterLink to="/login">Войти</StyledRegisterLink>
      </RegisterText>
    </LoginContainer>
  </LoginWrapper>
);

export default SignUpPage;
