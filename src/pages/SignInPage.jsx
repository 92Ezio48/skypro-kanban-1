import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./SignInPage-styled";
import { loginUser } from "../services/api";

function SignInPage({ setIsAuth }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // для сообщений об ошибках

  // Обработчик "войти"
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const user = await loginUser({ login, password });
      localStorage.setItem("token", user.token);
      setIsAuth(true);
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
            value={login}
            onChange={(e) => setLogin(e.target.value)}
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
