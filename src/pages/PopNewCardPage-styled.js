import styled from "styled-components";
export const Overlay = styled.div`
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  display: block;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const Block = styled.div`
  display: block;
  margin: 0 auto;
  background: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(32, 32, 44);" : " #eaeef6;"};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "0.7px solid #222e3a" : "0.7px solid #d4dbe5"};

  position: relative;
  @media (max-width: 600px) {
    max-width: 370px;
    padding: 24px 9px 36px; // меньше паддингов для мобильного
  }
`;

export const Content = styled.div`
  display: block;
  text-align: left;
`;

export const Title = styled.h3`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
  margin-top: 0;
`;

export const Close = styled.a`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  font-size: 20px;
  text-decoration: none;
  &:hover {
    color: #000000;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const FormBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Subttl = styled.label`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin: 20px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
    color: rgb(148, 166, 190);
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -1%;
    text-align: left;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  margin-top: 14px;
  height: 200px;
  outline: none;
  padding: 14px;
  background-color: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "rgb(32, 32, 44);" : " #eaeef6;"};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  letter-spacing: -0.14px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  &::placeholder {
    color: rgb(148, 166, 190);
    padding-top: 8px;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -1%;
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    background-color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgb(32, 32, 44);" : " #eaeef6;"};
    color: ${({ $isDarkTheme }) =>
      $isDarkTheme ? "rgb(148, 166, 190)" : "#000"};
    letter-spacing: -0.14px;
  }
  @media (max-width: 600px) {
    height: 37px;
  }
`;

export const Categories = styled.div`
  margin-bottom: 20px;
  @media (max-width: 600px) {
    margin-bottom: 14px;
  }
`;

export const CategoriesTitle = styled.p`
  margin-bottom: 14px;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

export const CategoryThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  @media (max-width: 600px) {
    gap: 6px;
    justify-content: flex-start;
  }
`;

export const CategoryTheme = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
  max-width: 150px;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: ${(props) => (props.$active ? 1 : 0.4)};
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;

  /* Цвета и фон по теме */
  background-color: ${({ color, $isDarkTheme }) =>
    color === "orange"
      ? $isDarkTheme
        ? "rgb(255, 109, 0);" // ярко-оранжевый, но прозрачный
        : "#ffe4c2"
      : color === "green"
      ? $isDarkTheme
        ? "rgba(62, 241, 128, 0.86)" // насыщенно-зелёный, прозрачно
        : "#0dc456ff"
      : color === "purple"
      ? $isDarkTheme
        ? "rgba(138, 92, 246, 0.89)" // фиолетовый намёк, прозрачно
        : "#e9d4ff"
      : $isDarkTheme
      ? "rgba(255,255,255,0.07)"
      : "#fff"};

  color: ${({ color, $isDarkTheme }) =>
    color === "orange"
      ? $isDarkTheme
        ? "rgb(255, 228, 194)"
        : "rgb(255, 109, 0)"
      : color === "green"
      ? $isDarkTheme
        ? "#fff"
        : "#097f4e"
      : color === "purple"
      ? $isDarkTheme
        ? "#fff"
        : "#8837a6"
      : $isDarkTheme
      ? "#fff"
      : "#262626"};

  border: ${({ $isDarkTheme }) =>
    $isDarkTheme ? "1.5px solid rgba(255, 255, 255, 0.10)" : "none"};
`;

export const CategoryText = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap;
  color: ${({ color, $isDarkTheme }) =>
    color === "orange"
      ? $isDarkTheme
        ? "rgb(255, 228, 194)"
        : "rgb(255, 109, 0)"
      : color === "green"
      ? $isDarkTheme
        ? "rgb(255, 228, 194)"
        : "#097f4e"
      : color === "purple"
      ? $isDarkTheme
        ? "rgb(255, 228, 194)"
        : "#8837a6"
      : $isDarkTheme
      ? "#fff"
      : "#262626"};
`;

export const CreateBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  transition: background 0.18s;
  &:hover {
    background-color: #33399b;
  }
  @media (max-width: 600px) {
    width: 100%;
    float: none;
    margin: 0;
  }
`;

export const TopCreate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const MidCreate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 21px;
  padding-bottom: 20px;
  @media (max-width: 600px) {
    @media (max-width: 600px) {
      flex-direction: column;
      gap: 14px;
      padding-bottom: 12px;
    }
  }
`;
