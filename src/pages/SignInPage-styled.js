import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(21, 20, 25)" : "#eaeef6"};

  @media (max-width: 480px) {
    padding: 0 8px;
  }
`;

export const LoginContainer = styled.div`
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(32, 32, 44)" : "#eaeef6"};
  padding: 40px 12px 32px 12px;
  border: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "0.7px solid #222e3a" : "0.7px solid #d4dbe5"};
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 368px;
  max-width: 100%;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 276px; // как на макете
    min-width: 0;
    padding: 32px 8px 28px 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
  }
`;

export const LoginTitle = styled.h2`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 20px;

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;

  @media (max-width: 480px) {
    gap: 5px;
  }
`;

export const LoginInput = styled.input`
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(32, 32, 44)" : "#eaeef6"};
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 8px;
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? "rgb(248,77,77)" : "rgba(148,166,190,0.4)"};
  box-sizing: border-box;
  color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(148, 166, 190)" : "#000"};
  &::placeholder {
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgb(148, 166, 190)" : "#000"};
    font-size: 14px;
  }
  &:focus {
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgb(32, 32, 44)" : "#eaeef6"};
    border: 2px solid
      ${({ $hasError }) => ($hasError ? "rgb(248,77,77)" : "#6898FF")};
  }

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
    font-size: 15px;
    padding: 8px 8px;
  }
`;

export const LoginButton = styled.button`
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
  background: ${({ disabled }) => (disabled ? "#e1e4eb" : "rgb(86, 94, 239)")};
  color: ${({ disabled }) => (disabled ? "#afb3bb" : "#fff")};
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  font-weight: 600;
  margin: 20px 0px;
  width: 248px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? "0.7" : "1")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  transition: background 0.2s, color 0.2s, opacity 0.2s;

  @media (max-width: 480px) {
    width: 100%;
    min-width: 0;
    margin: 18px 0px 12px 0px;
    height: 32px;
    font-size: 15px;
  }
`;

export const RegisterText = styled.p`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "column"};
  justify-content: center;
  align-items: center;
  gap: ${({ $direction }) => ($direction === "row" ? "5px" : "20")};
  padding: 0px;
  font-size: 14px;
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 6px;
  }
`;

export const StyledRegisterLink = styled(Link)`
  color: rgba(148, 166, 190, 0.4);
  text-decoration: underline;
  font-weight: 500;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;

  &:hover {
    text-decoration: none;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ErrorText = styled.div`
  color: rgb(248, 77, 77);
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
