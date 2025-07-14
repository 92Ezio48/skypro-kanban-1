import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as S from "./SignInPage-styled";
import { registerUser } from "../services/api";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [globalError, setGlobalError] = useState("");
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [loginExistsError, setLoginExistsError] = useState(false);

  const ERROR_REQUIRED =
    "Введённые вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.";
  const ERROR_INVALID =
    "Введённые вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.";

  const validateEmail = (v) => /\S+@\S+\.\S+/.test(v) && v.length >= 2;

  const nameError = name.trim().length < 3;
  const loginError = login.trim() === "" || !validateEmail(login);
  const passwordError = password.length < 3;

  const isFormValid = !nameError && !loginError && !passwordError;

  function getGlobalError() {
    if (nameError || loginError || passwordError) {
      if (name.trim() === "" || login.trim() === "" || password === "") {
        return ERROR_REQUIRED;
      }
      return ERROR_INVALID;
    }
    return "";
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setWasSubmitted(true);
    setLoginExistsError(false);

    if (!isFormValid) {
      setGlobalError(getGlobalError());
      return;
    }
    try {
      await registerUser({ login, name, password });
      navigate("/login");
    } catch (err) {
      // Если ошибка про существующий логин/email — выделяем поле
      if (
        (err.message && err.message.toLowerCase().includes("логин")) ||
        (err.message && err.message.toLowerCase().includes("существует"))
      ) {
        setLoginExistsError(true);
      }
      setGlobalError(err.message);
    }
  };

  // Важно: для login очистка существует ошибки
  function handleChange(fn, clearLoginError = false) {
    return (e) => {
      fn(e.target.value);
      setGlobalError("");
      if (clearLoginError) setLoginExistsError(false);
    };
  }

  return (
    <S.LoginWrapper>
      <S.LoginContainer>
        <S.LoginTitle>Регистрация</S.LoginTitle>

        <S.LoginForm onSubmit={handleRegister} autoComplete="off">
          <S.LoginInput
            $hasError={wasSubmitted && nameError}
            type="text"
            placeholder="Имя"
            value={name}
            onChange={handleChange(setName)}
            autoComplete="off"
          />
          <S.LoginInput
            $hasError={(wasSubmitted && loginError) || loginExistsError}
            type="text"
            placeholder="Эл. почта"
            autoComplete="username"
            value={login}
            onChange={handleChange(setLogin, true)}
          />
          <S.LoginInput
            $hasError={wasSubmitted && passwordError}
            type="password"
            placeholder="Пароль"
            autoComplete="new-password"
            value={password}
            onChange={handleChange(setPassword)}
          />
          {globalError && <S.ErrorText>{globalError}</S.ErrorText>}
          <S.LoginButton type="submit" disabled={!isFormValid && !wasSubmitted}>
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
