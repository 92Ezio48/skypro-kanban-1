import { useNavigate } from "react-router-dom";
import {
  Overlay,
  Container,
  Block,
  Title,
  BtnGroup,
  YesBtn,
  NoBtn,
} from "./Pop-exit-styled";
function PopexitComponent({ onClose, setIsAuth }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    // 1. Сбросить авторизацию:
    setIsAuth(false);
    // 2. Почистить токен если нужно:
    localStorage.removeItem("token"); // если используешь
    // 3. Переход на логин:
    navigate("/login", { replace: true });
    // 4. Закрыть модалку (если нужно)
    if (onClose) onClose();
  }

  function handleStay(e) {
    e.preventDefault();
    if (onClose) onClose(); // просто закрыть модалку!
  }

  return (
    <Overlay>
      <Container>
        <Block>
          <Title>
            <h2>Выйти из аккаунта?</h2>
          </Title>
          <form action="#">
            <BtnGroup>
              <YesBtn id="exitYes" onClick={handleLogout}>
                Да, выйти
              </YesBtn>
              <NoBtn id="exitNo" onClick={handleStay}>
                Нет, остаться
              </NoBtn>
            </BtnGroup>
          </form>
        </Block>
      </Container>
    </Overlay>
  );
}

export default PopexitComponent;
