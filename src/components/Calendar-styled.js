import styled, { css } from "styled-components";

// --- Основные компоненты (без изменений) ---
export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
  @media (max-width: 600px) {
    width: 100%; // растягиваем на всю доступную ширину блока
    min-width: 0; // сбрасываем минимальную ширину, если была
    max-width: 344px;
    margin: 0 auto 20px;
  }
`;
export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  font-size: 14px; /* По макету шрифт чуть больше */
  font-weight: 600;
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
`;
export const CalendarBlock = styled.div`
  display: block;
`;
export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;
export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;
export const NavActions = styled.div`
  display: flex;
  gap: 8px; /* Небольшой отступ между стрелками */
`;
export const NavAction = styled.button`
  /* Делаем кнопкой для доступности */
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 2px;
`;
export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;
export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
  @media (max-width: 600px) {
    padding: 0;
    margin: 7px 0 7px 0;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    column-gap: 0;
    text-align: center;
  }
`;
export const CalendarDayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  width: 22px; /* Выравнивание по центру ячеек */
  text-align: center;
  ${({ $weekend }) =>
    $weekend &&
    css`
      color: rgb(148, 166, 190); /* Цвет выходных дней недели */
    `}

  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
    padding: 0;
  }
`;
export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    width: 100%;
    min-width: 0;
    max-width: 344px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: 36px; /* или любую высоту ячейки под мобилу */
    column-gap: 0px;
    row-gap: 0px;
    justify-content: unset;
    align-items: unset;
    height: auto; /* чтобы высота была по содержимому */
  }
`;

// --- ✨ НОВЫЕ СТИЛИ ДЛЯ ЯЧЕЙКИ ✨ ---
export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  transition: all 0.2s ease-in-out;
  @media (max-width: 600px) {
    width: 100%;
    height: 30px;
    width: 30px;
    margin: 0;
    justify-self: center;
    align-self: center;
    ${({ $selected }) =>
      $selected &&
      css`
        &::after {
          width: 32px;
          height: 32px;
        }
      `}
  }
  /* Базовый цвет текста */
  color: rgb(148, 166, 190);
  font-weight: 400;
  cursor: pointer;

  /* Другой месяц */
  ${({ $otherMonth }) =>
    $otherMonth &&
    css`
      opacity: 0; /* Или opacity: 0.4;, если нужно их видеть */
      pointer-events: none;
    `}

  /* Выходной день */
  ${({ $weekend }) =>
    $weekend &&
    css`
      color: rgb(148, 166, 190); /* Оранжевый цвет для сб и вс */
    `}

  /* Сегодняшний день */
  ${({ $today }) =>
    $today &&
    css`
      font-weight: 700;
    `}

  /* Наведение мыши (только для активных дней) */
  ${({ $otherMonth, $selected }) =>
    !$otherMonth &&
    !$selected &&
    css`
      &:hover {
        background-color: #eaeeef; /* Светло-серый фон при наведении */
      }
    `}

  /* Выбранный день (самый высокий приоритет) */
  ${({ $selected }) =>
    $selected &&
    css`
      background-color: rgb(148, 166, 190);
      color: #ffffff;
      font-weight: 700;
    `}
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;
export const CalendarParagraph = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
`;
export const DateControl = styled.span`
  color: ${({ $isDarkTheme }) => ($isDarkTheme ? "#fff" : "#000")};
`;
export const HiddenInput = styled.input`
  display: none;
`;
