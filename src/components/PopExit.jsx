import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import * as S from "./PopExit-styled";

function PopexitComponent() {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  function handleLogout(e) {
    e.preventDefault();
    logout();
    navigate("/login", { replace: true });
  }

  function handleStay(e) {
    e.preventDefault();
    navigate(-1); // Вернуться назад, закрыть модалку
  }

  return (
    <S.Overlay>
      <S.Container>
        <S.Block>
          <S.Title>
            <h2>Выйти из аккаунта?</h2>
          </S.Title>
          <form>
            <S.BtnGroup>
              <S.YesBtn type="button" id="exitYes" onClick={handleLogout}>
                Да, выйти
              </S.YesBtn>
              <S.NoBtn type="button" id="exitNo" onClick={handleStay}>
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
