import "../GlobalStyles";
import React, { useState, useEffect } from "react";
import CalendarComponent from "./calendar";
import * as S from "./Popbrowse-styled";

// Используем ровно тот же список, что в макете
const STATUS_MAP = {
  todo: "Нужно сделать",
  progress: "В работе",
  testing: "Тестирование",
  done: "Готово",
  none: "Без статуса",
};

const STATUS_COLORS = {
  "Нужно сделать": "#94A6BE",
  "В работе": "#5C59E8",
  Тестирование: "#F3C41C",
  Готово: "#6BD475",
  "Без статуса": "#C7C7C7",
};

function PopBrowseComponent({
  isOpen,
  task = {
    title: "Название задачи",
    category: { name: "Web Design", color: "orange" },
    status: "todo",
    description: "Описание задачи",
    date: "",
  },
  onEdit,
  onDelete,
  onClose,
  isDarkTheme,
  setIsDarkTheme,
}) {
  // 🟢 Хуки ВСЕГДА в начале функции!
  const [date, setDate] = useState(task.date || "");

  useEffect(() => {
    setDate(task.date || "");
  }, [task.date, isOpen]);

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

  // Теперь условие после хуков!
  if (!isOpen) return null;

  return (
    <S.PopBrowse
      id="popBrowse"
      $isDarkTheme={isDarkTheme}
      $setIsDarkTheme={setIsDarkTheme}
    >
      <S.PopBrowseContainer>
        <S.PopBrowseBlock $isDarkTheme={isDarkTheme}>
          <S.PopBrowseGeneral>
            <S.PopBrowseFHalf>
              <S.TopHalfBlock>
                <S.TopBlock>
                  <S.Title $isDarkTheme={isDarkTheme}>{task.title}</S.Title>
                  <S.CategoryTag $categoryName={category.name} $active>
                    {category.name}
                  </S.CategoryTag>
                </S.TopBlock>
                <S.TopBlock $TopBlockStatus>
                  <S.DescLabel $isDarkTheme={isDarkTheme}>Статус</S.DescLabel>
                  <S.StatusBadge
                    $noMargin
                    $color={
                      STATUS_COLORS[STATUS_MAP[task.status] || "Без статуса"]
                    }
                  >
                    {STATUS_MAP[task.status] || "Без статуса"}
                  </S.StatusBadge>
                </S.TopBlock>
              </S.TopHalfBlock>
              <S.MidBlock>
                <S.DescriptionForm>
                  <S.DescBlock>
                    <S.DescLabel
                      $isDarkTheme={isDarkTheme}
                      htmlFor="textArea01"
                    >
                      Описание задачи
                    </S.DescLabel>
                    <S.DescriptionArea
                      value={task.description}
                      readOnly
                      placeholder="Описание задачи"
                      $isDarkTheme={isDarkTheme}
                      id="textArea01"
                    />
                  </S.DescBlock>
                </S.DescriptionForm>
                {/* ⬇️ Календарь */}
                <CalendarComponent
                  isDarkTheme={isDarkTheme}
                  date={date}
                  setDate={() => {}}
                  readOnly
                />
              </S.MidBlock>
            </S.PopBrowseFHalf>
            <S.BtnGroup>
              <S.BtnLeftGroup>
                <S.BrowseButton
                  $isDarkTheme={isDarkTheme}
                  $width="176px"
                  $variant="bor"
                  onClick={onEdit}
                >
                  Редактировать задачу
                </S.BrowseButton>
                <S.BrowseButton
                  $width="131px"
                  $variant="bor"
                  onClick={onDelete}
                  $isDarkTheme={isDarkTheme}
                >
                  Удалить задачу
                </S.BrowseButton>
              </S.BtnLeftGroup>
              <S.BrowseButton $width="86px" $variant="bg" onClick={onClose}>
                Закрыть
              </S.BrowseButton>
            </S.BtnGroup>
          </S.PopBrowseGeneral>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
}

export default PopBrowseComponent;
