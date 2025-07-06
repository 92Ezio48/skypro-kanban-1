import React from "react";
import { useNavigate } from "react-router-dom";
import CalendarComponent from "../components/Calendar";
import * as S from "./PopNewCardPage-styled";

function PopnewcardComponent() {
  const navigate = useNavigate();

  return (
    <S.Overlay>
      <S.Container>
        <S.Block>
          <S.Content>
            <S.Title>Создание задачи</S.Title>
            <S.Close
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/"); // возвращаемся на главную!
              }}
            >
              &#10006;
            </S.Close>
            <S.Wrap>
              <S.Form action="#">
                <S.FormBlock>
                  <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                  <S.Input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormBlock>
                <S.FormBlock>
                  <S.Subttl as="label" htmlFor="textArea">
                    Описание задачи
                  </S.Subttl>
                  <S.TextArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  />
                </S.FormBlock>
              </S.Form>
              <CalendarComponent />
            </S.Wrap>
            <S.Categories>
              <S.CategoriesTitle>Категория</S.CategoriesTitle>
              <S.CategoryThemes>
                <S.CategoryTheme color="orange" $active>
                  <S.CategoryText color="orange">Web Design</S.CategoryText>
                </S.CategoryTheme>
                <S.CategoryTheme color="green">
                  <S.CategoryText color="green">Research</S.CategoryText>
                </S.CategoryTheme>
                <S.CategoryTheme color="purple">
                  <S.CategoryText color="purple">Copywriting</S.CategoryText>
                </S.CategoryTheme>
              </S.CategoryThemes>
            </S.Categories>
            <S.CreateBtn id="btnCreate">Создать задачу</S.CreateBtn>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Overlay>
  );
}

export default PopnewcardComponent;
