import "../GlobalStyles";
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
} from "./Calendar-styled";
import {
  PopBrowse,
  PopBrowseContainer,
  PopBrowseBlock,
  TopBlock,
  Title,
  CategoryTag,
  DescriptionForm,
  DescBlock,
  DescLabel,
  DescriptionArea,
  BtnGroup,
  BrowseButton,
  PopBrowseGeneral,
  PopBrowseFHalf,
  MidBlock,
} from "./Popbrowse-styled";
function PopBrowseComponent({
  isOpen,
  task = {
    title: "Название задачи",
    category: { name: "Web Design", color: "orange" },
    status: "todo", // "todo", "progress", "testing", "done"
    description: "Описание задачи",
  },
  onEdit,
  onDelete,
  onClose,
}) {
  if (!isOpen) return null;
  const category = task.category || {
    name: task.theme,
    color: getThemeColor(task.theme),
  };
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
  return (
    <PopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseGeneral>
            <PopBrowseFHalf>
              <TopBlock>
                <Title>{task.title}</Title>
                <CategoryTag color={category.color} $active>
                  {category.name}
                </CategoryTag>
              </TopBlock>
              <MidBlock>
                <DescriptionForm>
                  <DescBlock>
                    <DescLabel htmlFor="textArea01">Описание задачи</DescLabel>
                    <DescriptionArea
                      value={task.description}
                      readOnly
                      placeholder="Описание задачи"
                      id="textArea01"
                    />
                  </DescBlock>
                </DescriptionForm>
                <CalendarWrapper>
                  <CalendarTitle>Даты</CalendarTitle>
                  <CalendarBlock>
                    <CalendarNav>
                      <CalendarMonth>Сентябрь 2023</CalendarMonth>
                      <NavActions>
                        <NavAction data-action="prev">
                          {/* svg ... */}
                        </NavAction>
                        <NavAction data-action="next">
                          {/* svg ... */}
                        </NavAction>
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
                    <input
                      type="hidden"
                      id="datepick_value"
                      value="08.09.2023"
                    />
                    <CalendarPeriod>
                      <CalendarParagraph>
                        Срок исполнения:{" "}
                        <span className="date-control">09.10.23.</span>
                      </CalendarParagraph>
                    </CalendarPeriod>
                  </CalendarBlock>
                </CalendarWrapper>
              </MidBlock>
            </PopBrowseFHalf>
            <BtnGroup>
              <BrowseButton $width="176px" $variant="bor" onClick={onEdit}>
                Редактировать задачу
              </BrowseButton>
              <BrowseButton $width="131px" $variant="bor" onClick={onDelete}>
                Удалить задачу
              </BrowseButton>
              <BrowseButton $width="86px" $variant="bg" onClick={onClose}>
                Закрыть
              </BrowseButton>
            </BtnGroup>
          </PopBrowseGeneral>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowse>
  );
}

export default PopBrowseComponent;
