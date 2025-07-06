import * as S from "./Calendar-styled";

function CalendarComponent() {
  return (
    <S.CalendarWrapper>
      <S.CalendarTitle>Даты</S.CalendarTitle>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">{/* svg ... */}</S.NavAction>
            <S.NavAction data-action="next">{/* svg ... */}</S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDaysNames>
            <S.CalendarDayName>пн</S.CalendarDayName>
            <S.CalendarDayName>вт</S.CalendarDayName>
            <S.CalendarDayName>ср</S.CalendarDayName>
            <S.CalendarDayName>чт</S.CalendarDayName>
            <S.CalendarDayName>пт</S.CalendarDayName>
            <S.CalendarDayName $weekend>сб</S.CalendarDayName>
            <S.CalendarDayName $weekend>вс</S.CalendarDayName>
          </S.CalendarDaysNames>
          <S.CalendarCells>
            <S.CalendarCell $otherMonth>28</S.CalendarCell>
            <S.CalendarCell $otherMonth>29</S.CalendarCell>
            <S.CalendarCell $otherMonth>30</S.CalendarCell>
            <S.CalendarCell>31</S.CalendarCell>
            <S.CalendarCell $current>1</S.CalendarCell>
            <S.CalendarCell $weekend>2</S.CalendarCell>
            <S.CalendarCell $weekend>3</S.CalendarCell>
            <S.CalendarCell $current>4</S.CalendarCell>
            <S.CalendarCell $current>5</S.CalendarCell>
            <S.CalendarCell $current>6</S.CalendarCell>
            <S.CalendarCell $current>7</S.CalendarCell>
            <S.CalendarCell $current>8</S.CalendarCell>
            <S.CalendarCell $weekend>9</S.CalendarCell>
            <S.CalendarCell $weekend>10</S.CalendarCell>
            <S.CalendarCell $current>11</S.CalendarCell>
            <S.CalendarCell $current>12</S.CalendarCell>
            <S.CalendarCell $current>13</S.CalendarCell>
            <S.CalendarCell $current>14</S.CalendarCell>
            <S.CalendarCell $current>15</S.CalendarCell>
            <S.CalendarCell $weekend>16</S.CalendarCell>
            <S.CalendarCell $weekend>17</S.CalendarCell>
            <S.CalendarCell $current>18</S.CalendarCell>
            <S.CalendarCell $current>19</S.CalendarCell>
            <S.CalendarCell $current>20</S.CalendarCell>
            <S.CalendarCell $current>21</S.CalendarCell>
            <S.CalendarCell $current>22</S.CalendarCell>
            <S.CalendarCell $weekend>23</S.CalendarCell>
            <S.CalendarCell $weekend>24</S.CalendarCell>
            <S.CalendarCell $current>25</S.CalendarCell>
            <S.CalendarCell $current>26</S.CalendarCell>
            <S.CalendarCell $current>27</S.CalendarCell>
            <S.CalendarCell $current>28</S.CalendarCell>
            <S.CalendarCell $current>29</S.CalendarCell>
            <S.CalendarCell $weekend>30</S.CalendarCell>
            <S.CalendarCell $otherMonth $weekend>
              1
            </S.CalendarCell>
          </S.CalendarCells>
        </S.CalendarContent>
        <S.HiddenInput type="hidden" id="datepick_value" value="08.09.2023" />
        <S.CalendarPeriod>
          <S.CalendarParagraph>
            Выберите срок исполнения <S.DateControl>08.09.2023</S.DateControl>.
          </S.CalendarParagraph>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.CalendarWrapper>
  );
}

export default CalendarComponent;
