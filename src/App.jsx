import "./App.css";
import HeaderComponent from "./components/header";
import PopbrowseComponent from "./components/pop-browse";
import PopnewcardComponent from "./components/pop-new-card";
import ColumnComponent from "./components/Column";
import CardComponent from "./components/Card";
import PopexitComponent from "./components/Pop-exit";
function App() {
  return (
    <div className="wrapper">
      {/* pop-up start*/}
      <PopexitComponent />

      <PopnewcardComponent />

      <PopbrowseComponent />

      {/* pop-up end*/}

      <HeaderComponent />
      <main className="main">
        <div className="container">
          <div className="main__block">
            <div className="main__content">
              <ColumnComponent />
              <ColumnComponent />
              <ColumnComponent />
              <ColumnComponent />
              <ColumnComponent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default App;
