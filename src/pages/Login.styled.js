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
  padding: 32px 24px;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 320px;
`;

export const LoginTitle = styled.h2`
  margin-bottom: 1.5em;
  font-weight: 700;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const LoginInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
`;

export const LoginButton = styled.button`
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  background: #377dff;
  color: #fff;
  border: none;
  cursor: pointer;
  font-weight: 600;
  margin-top: 0.5em;
`;

export const RegisterText = styled.p`
  margin-top: 1.5em;
  font-size: 0.98em;
`;

export const StyledRegisterLink = styled(Link)`
  color: #377dff;
  text-decoration: underline;
  font-weight: 500;

  &:hover {
    color: #235ab5;
  }
`;
