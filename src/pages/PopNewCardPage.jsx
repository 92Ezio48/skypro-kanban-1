import React, { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import CalendarComponent from "../components/Calendar";
import { createTask } from "../services/api";
import * as S from "./PopNewCardPage-styled";

function PopnewcardComponent() {
  const navigate = useNavigate();
  const { onTaskCreated } = useOutletContext(); // Получаем через Outlet context функцию обновления

  // Состояния для полей
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [date, setDate] = useState("");
  const [status] = useState("Без статуса");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCategoryClick = (cat) => setTopic(cat);

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      // Получаем токен (можно из пропсов, если нужно)
      const token = "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck";
      await createTask({
        token,
        title,
        topic,
        status,
        description,
        date: date || new Date().toISOString(),
      });
      // 🔥 После успешного создания — ОБНОВЛЯЕМ задачи!
      if (onTaskCreated) onTaskCreated(); // Запросит их в MainPage
      navigate("/"); // возврат на главную
    } catch (err) {
      setError("Ошибка создания задачи: " + (err?.message || ""));
    } finally {
      setLoading(false);
    }
  };

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
                navigate("/");
              }}
            >
              &#10006;
            </S.Close>
            <S.Wrap>
              <S.Form onSubmit={handleCreate}>
                <S.MidCreate>
                  <S.TopCreate>
                    <S.FormBlock>
                      <S.Subttl htmlFor="formTitle">Название задачи</S.Subttl>
                      <S.Input
                        type="text"
                        name="name"
                        id="formTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Введите название задачи..."
                        autoFocus
                        required
                      />
                    </S.FormBlock>
                    <S.FormBlock>
                      <S.Subttl as="label" htmlFor="textArea">
                        Описание задачи
                      </S.Subttl>
                      <S.TextArea
                        name="text"
                        id="textArea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Введите описание задачи..."
                      />
                    </S.FormBlock>
                  </S.TopCreate>

                  <CalendarComponent date={date} setDate={setDate} />
                </S.MidCreate>
                <S.Categories>
                  <S.CategoriesTitle>Категория</S.CategoriesTitle>
                  <S.CategoryThemes>
                    <S.CategoryTheme
                      color="orange"
                      $active={topic === "Web Design"}
                      onClick={() => handleCategoryClick("Web Design")}
                    >
                      <S.CategoryText color="orange">Web Design</S.CategoryText>
                    </S.CategoryTheme>
                    <S.CategoryTheme
                      color="green"
                      $active={topic === "Research"}
                      onClick={() => handleCategoryClick("Research")}
                    >
                      <S.CategoryText color="green">Research</S.CategoryText>
                    </S.CategoryTheme>
                    <S.CategoryTheme
                      color="purple"
                      $active={topic === "Copywriting"}
                      onClick={() => handleCategoryClick("Copywriting")}
                    >
                      <S.CategoryText color="purple">
                        Copywriting
                      </S.CategoryText>
                    </S.CategoryTheme>
                  </S.CategoryThemes>
                </S.Categories>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <S.CreateBtn id="btnCreate" type="submit" disabled={loading}>
                  {loading ? "Создание..." : "Создать задачу"}
                </S.CreateBtn>
              </S.Form>
            </S.Wrap>
          </S.Content>
        </S.Block>
      </S.Container>
    </S.Overlay>
  );
}

export default PopnewcardComponent;
