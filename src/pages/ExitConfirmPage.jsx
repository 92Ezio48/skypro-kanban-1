import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext"; // Импортируй контекст!!

// Проп $isDarkTheme будем пробрасывать из родителя!
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgba(15, 23, 42, 0.7)" : "rgba(0, 0, 0, 0.3)"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = styled.div`
  width: 370px;
  height: 180px;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#222e3a" : "#fff")};
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#222e3a")};
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  padding: 40px 20px 30px 20px;
  min-width: 320px;
  text-align: center;
  box-shadow: 0 6px 32px rgba(47, 76, 133, 0.16);
  @media (max-width: 600px) {
    padding: 50px 20px 30px 20px;
    height: 240px;
  }
`;

// Можно контролировать цвета кнопок по теме, если захочешь — добавь проп $isDarkTheme

const ButtonBlock = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
  justify-content: center;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const YesBtn = styled.button`
  width: 304px;
  height: 40px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  &:hover {
    background-color: #ffffff;
    color: #565eef;
    border: 0.7px solid rgb(86, 94, 239);
  }
`;

const NoBtn = styled.button`
  width: 304px;
  height: 40px;
  border-radius: 4px;
  background-color: #ffffff;
  color: #565eef;
  border: 0.7px solid rgb(86, 94, 239);
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  &:hover {
    background-color: #565eef;
    color: #ffffff;
  }
`;
const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 24px;
`;

// ! КОМПОНЕНТ получает проп isDarkTheme (без доллара!)
export default function ExitConfirmModal({ isDarkTheme }) {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext); // Получаем logout!

  // Функция выхода
  const handleLogout = () => {
    logout(); // Очищает userInfo и user в стейте
    navigate("/login");
  };

  return (
    <Overlay $isDarkTheme={isDarkTheme} onClick={() => navigate(-1)}>
      <Modal $isDarkTheme={isDarkTheme} onClick={(e) => e.stopPropagation()}>
        <Title>Выйти из аккаунта?</Title>
        <ButtonBlock>
          <YesBtn onClick={handleLogout}>Да, выйти</YesBtn>
          <NoBtn onClick={() => navigate(-1)}>Нет, остаться</NoBtn>
        </ButtonBlock>
      </Modal>
    </Overlay>
  );
}
