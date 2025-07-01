import { useNavigate } from "react-router-dom";

function PopexitComponent({ onClose }) {
  const navigate = useNavigate();
  function handleLogout(e) {
    e.preventDefault();
    // Здесь можешь вызвать логаут, очистку токена...
    navigate("/sign-in");
    if (onClose) onClose(); // для очистки модалки, если нужно
  }

  function handleStay(e) {
    e.preventDefault();
    if (onClose) onClose(); // просто закрыть модалку!
  }

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>
          <form className="pop-exit__form" id="formExit" action="#">
            <div className="pop-exit__form-group">
              <button
                className="pop-exit__exit-yes _hover01"
                id="exitYes"
                onClick={handleLogout}
              >
                Да, выйти
              </button>
              <button
                className="pop-exit__exit-no _hover03"
                id="exitNo"
                onClick={handleStay}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopexitComponent;
