import React from "react";
import { useNavigate } from "react-router-dom"; // обязательно!
import CalendarComponent from "./calendar";
import {
  Overlay,
  Container,
  Block,
  Content,
  Title,
  Close,
  Wrap,
  Form,
  FormBlock,
  Subttl,
  Input,
  TextArea,
  Categories,
  CategoriesTitle,
  CategoryThemes,
  CategoryTheme,
  CategoryText,
  CreateBtn,
} from "./pop-new-card-styled";

function PopnewcardComponent() {
  const navigate = useNavigate();

  return (
    <Overlay>
      <Container>
        <Block>
          <Content>
            <Title>Создание задачи</Title>
            <Close
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/"); // ← возвращаемся на главную!
              }}
            >
              &#10006;
            </Close>
            <Wrap>
              <Form action="#">
                <FormBlock>
                  <Subttl htmlFor="formTitle">Название задачи</Subttl>
                  <Input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormBlock>
                <FormBlock>
                  <Subttl as="label" htmlFor="textArea">
                    Описание задачи
                  </Subttl>
                  <TextArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </FormBlock>
              </Form>
              <CalendarComponent />
            </Wrap>
            <Categories>
              <CategoriesTitle>Категория</CategoriesTitle>
              <CategoryThemes>
                <CategoryTheme color="orange" $active>
                  <CategoryText color="orange">Web Design</CategoryText>
                </CategoryTheme>
                <CategoryTheme color="green">
                  <CategoryText color="green">Research</CategoryText>
                </CategoryTheme>
                <CategoryTheme color="purple">
                  <CategoryText color="purple">Copywriting</CategoryText>
                </CategoryTheme>
              </CategoryThemes>
            </Categories>
            <CreateBtn id="btnCreate">Создать задачу</CreateBtn>
          </Content>
        </Block>
      </Container>
    </Overlay>
  );
}

export default PopnewcardComponent;
