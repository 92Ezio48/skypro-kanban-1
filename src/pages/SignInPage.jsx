import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./SignInPage-styled";
import { AuthContext } from "../context/AuthContext";

function SignInPage() {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(""); // переименовал!
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useContext(AuthContext); // функцию логина можно оставить "login"

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login({ login: userLogin, password }); // передаём правильно
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
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
            value={userLogin}
            onChange={(e) => setUserLogin(e.target.value)}
            required
          />
          <S.LoginInput
            type="password"
            placeholder="Пароль"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <S.LoginButton type="submit">Войти</S.LoginButton>
        </S.LoginForm>
        {error && <S.ErrorText>{error}</S.ErrorText>}
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
