import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(21, 20, 25)" : "#f1f1f1"};
`;

export const MainComponent = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(21, 20, 25)" : "#eaeef6"};

  @media (max-width: 600px) {
    padding-bottom: 64px; // всегда место для фиксированной кнопки
  }
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(21, 20, 25)" : "#eaeef6"};

  @media (max-width: 600px) {
    max-width: 100vw;
    padding: 0 4px;
  }
`;

export const Mainblock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(21, 20, 25)" : "#eaeef6"};

  @media (max-width: 600px) {
    padding: 10px 0 24px;
  }
`;
export const ColumnsWrapper = styled.div`
  display: flex;
  gap: 24px;
  overflow-x: auto;
  overflow-y: visible;
  width: 100%;
  padding-bottom: 8px;

  scrollbar-width: thin;
  scrollbar-color: #565eef #18181d;
  &::-webkit-scrollbar {
    height: 7px;
    background: #18181d;
  }
  &::-webkit-scrollbar-thumb {
    background: #565eef;
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 10px;
  }
`;
export const NoTasksText = styled.div`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-family: Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0px;
  text-align: left;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(21, 20, 25)" : "#eaeef6"};
  padding: 16px 24px;
  border-radius: 8px;
  display: inline-block;
  margin-top: 32px;
`;
