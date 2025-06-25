import "./App.css";
import HeaderComponent from "./components/header-component";
import PopbrowseComponent from "./components/pop-browse-component";
import PopnewcardComponent from "./components/pop-new-card-component";
import MainComponent from "./components/main-component";
function App() {
  return (
    <div className="wrapper">
      {/* pop-up start*/}
      <div className="pop-exit" id="popExit">
        <div className="pop-exit__container">
          <div className="pop-exit__block">
            <div className="pop-exit__ttl">
              <h2>Выйти из аккаунта?</h2>
            </div>
            <form className="pop-exit__form" id="formExit" action="#">
              <div className="pop-exit__form-group">
                <button className="pop-exit__exit-yes _hover01" id="exitYes">
                  <a href="modal/signin.html">Да, выйти</a>{" "}
                </button>
                <button className="pop-exit__exit-no _hover03" id="exitNo">
                  <a href="main.html">Нет, остаться</a>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <PopnewcardComponent />

      <PopbrowseComponent />

      {/* pop-up end*/}

      <HeaderComponent />
      <MainComponent />
    </div>
  );
}
export default App;
