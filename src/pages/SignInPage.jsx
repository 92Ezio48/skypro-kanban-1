import React from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./SignInPage-styled";

// ⬇️ Обязательно получаем setIsAuth как пропс
function SignInPage({ setIsAuth }) {
  const navigate = useNavigate();

  // Обработчик "войти"
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("token", "testtoken");
    setIsAuth(true);
    navigate("/");
  };

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.LoginTitle>Вход</S.LoginTitle>
        <S.LoginForm onSubmit={handleLogin}>
          <S.LoginInput
            type="text"
            placeholder="Эл. почта"
            autoComplete="username"
            required
          />
          <S.LoginInput
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
            required
          />
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
