import styled from "styled-components";
import { Link } from "react-router-dom";
export const LoginWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f6fa;
`;

export const LoginContainer = styled.div`
  background: #fff;
  padding: 50px 60px 50px 60px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 368px;
  max-height: 390px;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 700;
`;

export const LoginForm = styled.form`
  display: flex;

  flex-direction: column;
  gap: 7px;
`;

export const LoginInput = styled.input`
  width: 248px;
  height: 30px;
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 8px;
  border: 2px solid
    ${({ $hasError }) =>
      $hasError ? "rgb(248,77,77)" : "rgba(148,166,190,0.4)"};
  box-sizing: border-box;

  &:focus {
    border: 2px solid
      ${({ $hasError }) => ($hasError ? "rgb(248,77,77)" : "#6898FF")};
  }
`;

export const LoginButton = styled.button`
  padding: 8px 10px 8px 10px;
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
`;

export const RegisterText = styled.p`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || "column"};
  justify-content: flex-start;
  align-items: center;
  gap: ${({ $direction }) => ($direction === "row" ? "5px" : "20")};
  padding: 0px;
  font-size: 14px;
  color: rgba(148, 166, 190, 0.4);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -1%;
  text-align: center;
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
`;
export const ErrorText = styled.div`
  color: rgb(248, 77, 77);
  font-family: Arial;
  font-size: 12px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
`;
