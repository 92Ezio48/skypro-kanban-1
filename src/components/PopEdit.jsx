import "../GlobalStyles";
import React, { useState, useEffect } from "react";
import * as S from "./Popbrowse-styled";
import CalendarComponent from "../components/calendar";
import * as N from "../pages/PopNewCardPage-styled";

const STATUS_MAP = {
  none: "Без статуса",
  todo: "Нужно сделать",
  progress: "В работе",
  testing: "Тестирование",
  done: "Готово",
};
const STATUS_COLORS = {
  "Без статуса": "#C7C7C7",
  "Нужно сделать": "#94A6BE",
  "В работе": "#5C59E8",
  Тестирование: "#F3C41C",
  Готово: "#6BD475",
};

export default function PopEditComponent({
  task,
  loading,
  onSave,
  onDelete,
  onCancel,
  isDarkTheme,
  setIsDarkTheme,
}) {
  const [title, setTitle] = useState(task.title || "");
  const [status, setStatus] = useState(task.status || "none");
  const [date, setDate] = useState(task.date || "");
  const [description, setDescription] = useState(task.description || "");

  useEffect(() => {
    setTitle(task.title || "");
    setStatus(task.status || "none");
    setDate(task.date || "");
    setDescription(task.description || "");
  }, [task]);
  function handleSaveClick() {
    onSave({
      ...task, // обязательно передай id!
      title,
      status,
      description,
      date,
    });
  }
  function getThemeColor(theme) {
    switch (theme) {
      case "Research":
        return "rgb(6, 177, 110)";
      case "Copywriting":
        return "rgb(154, 72, 241)";
      case "Web Design":
        return "rgb(255, 109, 0)";
      default:
        return "gray";
    }
  }
  const category = task.category || {
    name: task.topic,
    color: getThemeColor(task.title),
  };

  return (
    <S.PopBrowse
      id="popEdit"
      $isDarkTheme={isDarkTheme}
      $setIsDarkTheme={setIsDarkTheme}
    >
      <S.PopBrowseContainer>
        <S.PopBrowseBlock $isDarkTheme={isDarkTheme}>
          <S.PopBrowseGeneral>
            {/* Заголовок + категория */}
            <S.TopBlock>
              <S.Title $isDarkTheme={isDarkTheme}>{task.title}</S.Title>
              <S.CategoryTag $categoryName={category.name} $active>
                {category.name}
              </S.CategoryTag>
            </S.TopBlock>

            {/* Блок выбора статуса */}
            <S.EditStatusRow>
              <S.DescLabel
                $isDarkTheme={isDarkTheme}
                className="edit-status-label"
              >
                Статус
              </S.DescLabel>
              <S.StatusButtons>
                {Object.keys(STATUS_MAP).map((key) => (
                  <S.StatusChoiceButton
                    $isDarkTheme={isDarkTheme}
                    key={key}
                    $active={status === key}
                    type="button"
                    onClick={() => setStatus(key)}
                    disabled={loading}
                  >
                    {STATUS_MAP[key]}
                  </S.StatusChoiceButton>
                ))}
              </S.StatusButtons>
            </S.EditStatusRow>

            {/* Описание + Календарь */}
            <S.EditMainRow>
              {/* Описание */}
              <S.EditDescCol>
                <S.DescLabel $isDarkTheme={isDarkTheme} htmlFor="textArea01">
                  Описание задачи
                </S.DescLabel>
                <N.TextArea
                  name="text"
                  id="textArea"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                  rows={8}
                  className="edit-desc"
                  $isDarkTheme={isDarkTheme}
                />
              </S.EditDescCol>
              {/* Даты */}
              <S.EditCalendarCol>
                <CalendarComponent
                  isDarkTheme={isDarkTheme}
                  date={date}
                  setDate={setDate}
                />
              </S.EditCalendarCol>
            </S.EditMainRow>

            {/* Кнопки снизу */}
            <S.BtnGroup className="edit-btns">
              <S.BtnLeftGroup>
                <S.BrowseButton
                  $width="99px"
                  $variant="bg"
                  $noMargin
                  onClick={handleSaveClick}
                  disabled={loading}
                >
                  Сохранить
                </S.BrowseButton>

                <S.BrowseButton
                  $width="93px"
                  $variant="bor"
                  onClick={onCancel}
                  disabled={loading}
                  $isDarkTheme={isDarkTheme}
                >
                  Отменить
                </S.BrowseButton>

                <S.BrowseButton
                  $width="131px"
                  $variant="bor"
                  onClick={onDelete}
                  disabled={loading}
                  className="btn-delete"
                  $isDarkTheme={isDarkTheme}
                >
                  Удалить задачу
                </S.BrowseButton>
              </S.BtnLeftGroup>
              <S.BrowseButton
                $width="104px"
                $variant="bg"
                $editMargin
                onClick={onCancel}
                disabled={loading}
              >
                Закрыть
              </S.BrowseButton>
            </S.BtnGroup>
          </S.PopBrowseGeneral>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}
