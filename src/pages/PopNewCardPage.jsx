import React, { useState, useContext } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import CalendarComponent from "../components/calendar";
import { createTask } from "../services/api";
import * as S from "./PopNewCardPage-styled";
import { AuthContext } from "../context/AuthContext";

function PopnewcardComponent({ isDarkTheme, setIsDarkTheme }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const outletCtx = useOutletContext() || {};
  // Унифицируем название!
  const { onTasksChanged } = outletCtx || {};

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

    // Валидация: все поля должны быть заполнены и не состоять только из пробелов
    if (!title.trim() || !description.trim() || !topic.trim() || !date.trim()) {
      setError("Пожалуйста, заполните все поля и выберите дату!");
      setLoading(false);
      return;
    }

    try {
      const token = user?.token;
      if (!token) throw new Error("Нет токена пользователя!");

      // Удаляем все пробелы из названия и описания задачи
      const cleanTitle = title.replace(/\s/g, "");
      const cleanDescription = description.replace(/\s/g, "");

      await createTask({
        token,
        title: cleanTitle,
        topic,
        status,
        description: cleanDescription,
        date, // только выбранная дата!
      });

      // 👇 Главное изменение:
      if (onTasksChanged) await onTasksChanged();
      navigate("/");
    } catch {
      setError("Ошибка создания задачи: заполните все поля!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Overlay>
      <S.Container>
        <S.Block $isDarkTheme={isDarkTheme} setIsDarkTheme={setIsDarkTheme}>
          <S.Content>
            <S.Title $isDarkTheme={isDarkTheme}>Создание задачи</S.Title>
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
                      <S.Subttl $isDarkTheme={isDarkTheme} htmlFor="formTitle">
                        Название задачи
                      </S.Subttl>
                      <S.Input
                        type="text"
                        name="name"
                        id="formTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Введите название задачи..."
                        required
                        $isDarkTheme={isDarkTheme}
                      />
                    </S.FormBlock>
                    <S.FormBlock>
                      <S.Subttl
                        $isDarkTheme={isDarkTheme}
                        as="label"
                        htmlFor="textArea"
                      >
                        Описание задачи
                      </S.Subttl>
                      <S.TextArea
                        name="text"
                        id="textArea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Введите описание задачи..."
                        $isDarkTheme={isDarkTheme}
                      />
                    </S.FormBlock>
                  </S.TopCreate>
                  <CalendarComponent
                    date={date}
                    setDate={setDate}
                    isDarkTheme={isDarkTheme}
                    setIsDarkTheme={setIsDarkTheme}
                  />
                </S.MidCreate>
                <S.Categories>
                  <S.CategoriesTitle $isDarkTheme={isDarkTheme}>
                    Категория
                  </S.CategoriesTitle>
                  <S.CategoryThemes>
                    <S.CategoryTheme
                      color="orange"
                      $active={topic === "Web Design"}
                      onClick={() => handleCategoryClick("Web Design")}
                      $isDarkTheme={isDarkTheme}
                    >
                      <S.CategoryText $isDarkTheme={isDarkTheme} color="orange">
                        Web Design
                      </S.CategoryText>
                    </S.CategoryTheme>
                    <S.CategoryTheme
                      color="green"
                      $active={topic === "Research"}
                      onClick={() => handleCategoryClick("Research")}
                      $isDarkTheme={isDarkTheme}
                    >
                      <S.CategoryText $isDarkTheme={isDarkTheme} color="green">
                        Research
                      </S.CategoryText>
                    </S.CategoryTheme>
                    <S.CategoryTheme
                      color="purple"
                      $active={topic === "Copywriting"}
                      onClick={() => handleCategoryClick("Copywriting")}
                      $isDarkTheme={isDarkTheme}
                    >
                      <S.CategoryText $isDarkTheme={isDarkTheme} color="purple">
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
