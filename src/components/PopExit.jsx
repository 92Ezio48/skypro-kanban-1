import { useNavigate } from "react-router-dom";
import * as S from "./PopExit-styled";

function PopexitComponent({ onClose, setIsAuth }) {
  const navigate = useNavigate();

  function handleLogout(e) {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
    if (onClose) onClose();
  }

  function handleStay(e) {
    e.preventDefault();
    if (onClose) onClose();
  }

  return (
    <S.Overlay>
      <S.Container>
        <S.Block>
          <S.Title>
            <h2>Выйти из аккаунта?</h2>
          </S.Title>
          <form action="#">
            <S.BtnGroup>
              <S.YesBtn id="exitYes" onClick={handleLogout}>
                Да, выйти
              </S.YesBtn>
              <S.NoBtn id="exitNo" onClick={handleStay}>
                Нет, остаться
              </S.NoBtn>
            </S.BtnGroup>
          </form>
        </S.Block>
      </S.Container>
    </S.Overlay>
  );
}

export default PopexitComponent;
