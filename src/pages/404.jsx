import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 64px;
  color: #565eef;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 20px;
  color: #555;
  margin-bottom: 24px;
`;

const HomeLink = styled(Link)`
  color: #565eef;
  font-weight: 500;
  text-decoration: underline;
  &:hover {
    color: #33399b;
  }
`;

const NotFound = () => (
  <Wrapper>
    <Title>404</Title>
    <Description>Страница не найдена</Description>
    <HomeLink to="/">Вернуться на главную</HomeLink>
  </Wrapper>
);

export default NotFound;
