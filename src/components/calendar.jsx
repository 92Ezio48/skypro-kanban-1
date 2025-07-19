import React, { useMemo } from "react";
import * as S from "./Calendar-styled";
import dayjs from "dayjs";
import "dayjs/locale/ru";

const ArrowRight = ({ style, ...props }) => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ ...style, display: "block" }}
    {...props}
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="#94A6BE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function CalendarComponent({ date, setDate, isDarkTheme, setIsDarkTheme }) {
  const [month, setMonth] = React.useState(
    dayjs(date || new Date()).startOf("month")
  );

  const handleMonthChange = (dir) => {
    setMonth(month.add(dir, "month"));
  };

  const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

  // ---------- FIX: только 35 ячеек! ----------
  const calendarMatrix = useMemo(() => {
    let startOfMonth = month.startOf("month");
    let endOfMonth = month.endOf("month");

    let startDay = startOfMonth.day();
    let calendarStart = startOfMonth.subtract(
      startDay === 0 ? 6 : startDay - 1,
      "day"
    );

    let endDay = endOfMonth.day();
    let calendarEnd = endOfMonth.add(endDay === 0 ? 0 : 7 - endDay, "day");

    let days = [];
    let current = calendarStart;
    while (
      current.isBefore(calendarEnd, "day") ||
      current.isSame(calendarEnd, "day")
    ) {
      days.push(current);
      current = current.add(1, "day");
    }
    return days;
  }, [month]);
  // ------------------------------------------

  const today = dayjs().format("YYYY-MM-DD");
  const selected = date ? dayjs(date).format("YYYY-MM-DD") : null;

  return (
    <S.CalendarWrapper
      $isDarkTheme={isDarkTheme}
      $setIsDarkTheme={setIsDarkTheme}
    >
      <S.CalendarTitle $isDarkTheme={isDarkTheme}>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>
            {month
              .locale("ru")
              .format("MMMM YYYY")
              .replace(/^./, (str) => str.toUpperCase())}
          </S.CalendarMonth>
          <S.NavActions>
            <S.NavAction
              as="button"
              type="button"
              data-action="prev"
              onClick={() => handleMonthChange(-1)}
            >
              <ArrowRight style={{ transform: "rotate(90deg)" }} />
            </S.NavAction>
            <S.NavAction
              as="button"
              type="button"
              data-action="next"
              onClick={() => handleMonthChange(1)}
            >
              <ArrowRight style={{ transform: "rotate(-90deg)" }} />
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDaysNames>
            {weekDays.map((d, idx) => (
              <S.CalendarDayName key={d} $weekend={idx >= 5}>
                {d}
              </S.CalendarDayName>
            ))}
          </S.CalendarDaysNames>
          <S.CalendarCells>
            {calendarMatrix.map((cellDate, idx) => {
              const cellDateStr = cellDate.format("YYYY-MM-DD");
              const isOtherMonth = cellDate.month() !== month.month();
              const isToday = cellDateStr === today;
              const isSelected = cellDateStr === selected;
              const isWeekend = cellDate.day() === 0 || cellDate.day() === 6;

              return (
                <S.CalendarCell
                  key={idx}
                  $otherMonth={isOtherMonth}
                  $today={isToday}
                  $selected={isSelected}
                  $weekend={isWeekend && !isOtherMonth}
                  onClick={() =>
                    !isOtherMonth && setDate(cellDate.toISOString())
                  }
                >
                  {cellDate.date()}
                </S.CalendarCell>
              );
            })}
          </S.CalendarCells>
        </S.CalendarContent>
        <S.HiddenInput
          type="hidden"
          id="datepick_value"
          value={date ? dayjs(date).format("DD.MM.YYYY") : ""}
        />
        <S.CalendarPeriod>
          <S.CalendarParagraph>
            Срок исполнения:{" "}
            <S.DateControl $isDarkTheme={isDarkTheme}>
              {date ? dayjs(date).format("DD.MM.YY") : "не выбран"}
            </S.DateControl>
            .
          </S.CalendarParagraph>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarWrapper>
  );
}

export default CalendarComponent;
