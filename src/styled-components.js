import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "#1a2230" : " #f1f1f1;"};
`;
export const MainComponent = styled.div`
  width: 100%;
  overflow: hidden;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#222e3a" : " #f1f1f1;")};
`;
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#1a2230" : " #f1f1f1;")};
`;
export const Mainblock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;
  background: ${({ $isDarkTheme }) => ($isDarkTheme ? "#1a2230" : " #eaeef6;")};
`;
