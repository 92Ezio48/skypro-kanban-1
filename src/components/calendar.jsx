import {
  CalendarWrapper,
  CalendarTitle,
  CalendarParagraph,
  CalendarBlock,
  CalendarMonth,
  CalendarNav,
  NavActions,
  NavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  HiddenInput,
  DateControl,
  
} from "./Calendar-styled";
function CalendarComponent() {
  return (
    <CalendarWrapper>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>Сентябрь 2023</CalendarMonth>
          <NavActions>
            <NavAction data-action="prev">{/* svg ... */}</NavAction>
            <NavAction data-action="next">{/* svg ... */}</NavAction>
          </NavActions>
        </CalendarNav>
        <CalendarContent>
          <CalendarDaysNames>
            <CalendarDayName>пн</CalendarDayName>
            <CalendarDayName>вт</CalendarDayName>
            <CalendarDayName>ср</CalendarDayName>
            <CalendarDayName>чт</CalendarDayName>
            <CalendarDayName>пт</CalendarDayName>
            <CalendarDayName $weekend>сб</CalendarDayName>
            <CalendarDayName $weekend>вс</CalendarDayName>
          </CalendarDaysNames>
          <CalendarCells>
            <CalendarCell $otherMonth>28</CalendarCell>
            <CalendarCell $otherMonth>29</CalendarCell>
            <CalendarCell $otherMonth>30</CalendarCell>
            <CalendarCell>31</CalendarCell>
            <CalendarCell $current>1</CalendarCell>
            <CalendarCell $weekend>2</CalendarCell>
            <CalendarCell $weekend>3</CalendarCell>
            <CalendarCell $current>4</CalendarCell>
            <CalendarCell $current>5</CalendarCell>
            <CalendarCell $current>6</CalendarCell>
            <CalendarCell $current>7</CalendarCell>
            <CalendarCell $current>8</CalendarCell>
            <CalendarCell $weekend>9</CalendarCell>
            <CalendarCell $weekend>10</CalendarCell>
            <CalendarCell $current>11</CalendarCell>
            <CalendarCell $current>12</CalendarCell>
            <CalendarCell $current>13</CalendarCell>
            <CalendarCell $current>14</CalendarCell>
            <CalendarCell $current>15</CalendarCell>
            <CalendarCell $weekend>16</CalendarCell>
            <CalendarCell $weekend>17</CalendarCell>
            <CalendarCell $current>18</CalendarCell>
            <CalendarCell $current>19</CalendarCell>
            <CalendarCell $current>20</CalendarCell>
            <CalendarCell $current>21</CalendarCell>
            <CalendarCell $current>22</CalendarCell>
            <CalendarCell $weekend>23</CalendarCell>
            <CalendarCell $weekend>24</CalendarCell>
            <CalendarCell $current>25</CalendarCell>
            <CalendarCell $current>26</CalendarCell>
            <CalendarCell $current>27</CalendarCell>
            <CalendarCell $current>28</CalendarCell>
            <CalendarCell $current>29</CalendarCell>
            <CalendarCell $weekend>30</CalendarCell>
            <CalendarCell $otherMonth $weekend>
              1
            </CalendarCell>
          </CalendarCells>
        </CalendarContent>
        <HiddenInput type="hidden" id="datepick_value" value="08.09.2023" />
        <CalendarPeriod>
          <CalendarParagraph>
            Выберите срок исполнения <DateControl>08.09.2023</DateControl>.
          </CalendarParagraph>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
}
export default CalendarComponent;
