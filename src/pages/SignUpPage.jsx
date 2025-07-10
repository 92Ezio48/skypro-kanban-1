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

  const validateEmail = (v) => /\S+@\S+\.\S+/.test(v) && v.length >= 2;
  const validatePassword = (v) => v.length >= 3;

  // Проверка ошибок для текущих значений формы
  const getError = () => {
    if (!name.trim() || !login.trim() || !password) {
      return "Введённые вами данные некорректны. Чтобы завершить регистрацию, заполните все поля в форме.";
    }
    if (!validateEmail(login)) {
      return "Введённые вами данные некорректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";
    }
    if (!validatePassword(password)) {
      return "Введённые вами данные некорректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";
    }
    return null;
  };

  // Формально: все поля не пустые и email валиден и пароль >=6
  const isFormValid =
    name.trim().length > 0 &&
    login.trim().length >= 2 &&
    validateEmail(login) &&
    validatePassword(password);

  const handleRegister = async (e) => {
    e.preventDefault();
    const currentError = getError();
    setError(currentError);

    if (currentError) return;

    try {
      await registerUser({ login, name, password });
      navigate("/login");
    } catch (err) {
      setError(err.message || "Ошибка регистрации");
    }
  };

  // Инпуты в error если error есть (точно как в логине)
  const inputError = !!error;

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.LoginTitle>Регистрация</S.LoginTitle>
        <S.LoginForm onSubmit={handleRegister} autoComplete="off">
          <S.LoginInput
            type="text"
            placeholder="Имя"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (error) setError(null);
            }}
            $hasError={inputError}
          />
          <S.LoginInput
            type="text"
            placeholder="Эл. почта"
            autoComplete="username"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
              if (error) setError(null);
            }}
            $hasError={inputError}
          />
          <S.LoginInput
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(null);
            }}
            $hasError={inputError}
          />

          {error && <S.ErrorText>{error}</S.ErrorText>}

          <S.LoginButton type="submit" disabled={!!error || !isFormValid}>
            Зарегистрироваться
          </S.LoginButton>
        </S.LoginForm>
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
