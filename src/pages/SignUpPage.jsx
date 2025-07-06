import React from "react";
import * as S from "./SignInPage-styled";

const SignUpPage = () => (
  <S.LoginWrapper>
    <S.LoginContainer>
      <S.LoginTitle>Регистрация</S.LoginTitle>
      <S.LoginForm>
        <S.LoginInput type="text" placeholder="Имя" required />
        <S.LoginInput
          type="text"
          placeholder="Эл. почта"
          autoComplete="username"
          required
        />
        <S.LoginInput
          type="password"
          placeholder="Пароль"
          autoComplete="new-password"
          required
        />
        <S.LoginButton type="submit">Зарегистрироваться</S.LoginButton>
      </S.LoginForm>
      <S.RegisterText $direction="row">
        Уже есть аккаунт?{" "}
        <S.StyledRegisterLink to="/login">Войдите здесь</S.StyledRegisterLink>
      </S.RegisterText>
    </S.LoginContainer>
  </S.LoginWrapper>
);

export default SignUpPage;
