import "../GlobalStyles";
import * as C from "./Calendar-styled";
import * as S from "./Popbrowse-styled";

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
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseGeneral>
            <S.PopBrowseFHalf>
              <S.TopBlock>
                <S.Title>{task.title}</S.Title>
                <S.CategoryTag $categoryName={category.name} $active>
                  {category.name}
                </S.CategoryTag>
              </S.TopBlock>
              <S.MidBlock>
                <S.DescriptionForm>
                  <S.DescBlock>
                    <S.DescLabel htmlFor="textArea01">
                      Описание задачи
                    </S.DescLabel>
                    <S.DescriptionArea
                      value={task.description}
                      readOnly
                      placeholder="Описание задачи"
                      id="textArea01"
                    />
                  </S.DescBlock>
                </S.DescriptionForm>
                <C.CalendarWrapper>
                  <C.CalendarTitle>Даты</C.CalendarTitle>
                  <C.CalendarBlock>
                    <C.CalendarNav>
                      <C.CalendarMonth>Сентябрь 2023</C.CalendarMonth>
                      <C.NavActions>
                        <C.NavAction data-action="prev">
                          {/* svg ... */}
                        </C.NavAction>
                        <C.NavAction data-action="next">
                          {/* svg ... */}
                        </C.NavAction>
                      </C.NavActions>
                    </C.CalendarNav>
                    <C.CalendarContent>
                      <C.CalendarDaysNames>
                        <C.CalendarDayName>пн</C.CalendarDayName>
                        <C.CalendarDayName>вт</C.CalendarDayName>
                        <C.CalendarDayName>ср</C.CalendarDayName>
                        <C.CalendarDayName>чт</C.CalendarDayName>
                        <C.CalendarDayName>пт</C.CalendarDayName>
                        <C.CalendarDayName $weekend>сб</C.CalendarDayName>
                        <C.CalendarDayName $weekend>вс</C.CalendarDayName>
                      </C.CalendarDaysNames>
                      <C.CalendarCells>
                        <C.CalendarCell $otherMonth>28</C.CalendarCell>
                        <C.CalendarCell $otherMonth>29</C.CalendarCell>
                        <C.CalendarCell $otherMonth>30</C.CalendarCell>
                        <C.CalendarCell>31</C.CalendarCell>
                        <C.CalendarCell $current>1</C.CalendarCell>
                        <C.CalendarCell $weekend>2</C.CalendarCell>
                        <C.CalendarCell $weekend>3</C.CalendarCell>
                        <C.CalendarCell $current>4</C.CalendarCell>
                        <C.CalendarCell $current>5</C.CalendarCell>
                        <C.CalendarCell $current>6</C.CalendarCell>
                        <C.CalendarCell $current>7</C.CalendarCell>
                        <C.CalendarCell $current>8</C.CalendarCell>
                        <C.CalendarCell $weekend>9</C.CalendarCell>
                        <C.CalendarCell $weekend>10</C.CalendarCell>
                        <C.CalendarCell $current>11</C.CalendarCell>
                        <C.CalendarCell $current>12</C.CalendarCell>
                        <C.CalendarCell $current>13</C.CalendarCell>
                        <C.CalendarCell $current>14</C.CalendarCell>
                        <C.CalendarCell $current>15</C.CalendarCell>
                        <C.CalendarCell $weekend>16</C.CalendarCell>
                        <C.CalendarCell $weekend>17</C.CalendarCell>
                        <C.CalendarCell $current>18</C.CalendarCell>
                        <C.CalendarCell $current>19</C.CalendarCell>
                        <C.CalendarCell $current>20</C.CalendarCell>
                        <C.CalendarCell $current>21</C.CalendarCell>
                        <C.CalendarCell $current>22</C.CalendarCell>
                        <C.CalendarCell $weekend>23</C.CalendarCell>
                        <C.CalendarCell $weekend>24</C.CalendarCell>
                        <C.CalendarCell $current>25</C.CalendarCell>
                        <C.CalendarCell $current>26</C.CalendarCell>
                        <C.CalendarCell $current>27</C.CalendarCell>
                        <C.CalendarCell $current>28</C.CalendarCell>
                        <C.CalendarCell $current>29</C.CalendarCell>
                        <C.CalendarCell $weekend>30</C.CalendarCell>
                        <C.CalendarCell $otherMonth $weekend>
                          1
                        </C.CalendarCell>
                      </C.CalendarCells>
                    </C.CalendarContent>
                    <C.HiddenInput
                      type="hidden"
                      id="datepick_value"
                      value="08.09.2023"
                    />
                    <C.CalendarPeriod>
                      <C.CalendarParagraph>
                        Выберите срок исполнения{" "}
                        <C.DateControl>08.09.2023</C.DateControl>.
                      </C.CalendarParagraph>
                    </C.CalendarPeriod>
                  </C.CalendarBlock>
                </C.CalendarWrapper>
              </S.MidBlock>
            </S.PopBrowseFHalf>
            <S.BtnGroup>
              <S.BrowseButton $width="176px" $variant="bor" onClick={onEdit}>
                Редактировать задачу
              </S.BrowseButton>
              <S.BrowseButton $width="131px" $variant="bor" onClick={onDelete}>
                Удалить задачу
              </S.BrowseButton>
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
