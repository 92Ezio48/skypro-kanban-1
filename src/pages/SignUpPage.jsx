import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./SignInPage-styled";
import { registerUser } from "../services/api";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await registerUser({ login, name, password });
      // После успешной регистрации — переходи на страницу входа
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.LoginTitle>Регистрация</S.LoginTitle>
        <S.LoginForm onSubmit={handleRegister}>
          <S.LoginInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <S.LoginButton type="submit">Зарегистрироваться</S.LoginButton>
        </S.LoginForm>
        {error && <S.ErrorText>{error}</S.ErrorText>}
        <S.RegisterText $direction="row">
          Уже есть аккаунт?{" "}
          <S.StyledRegisterLink as={Link} to="/login">
            Войдите здесь
          </S.StyledRegisterLink>
        </S.RegisterText>
      </S.LoginContainer>
    </S.LoginWrapper>
  );
};

export default SignUpPage;
