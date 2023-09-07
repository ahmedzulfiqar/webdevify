import "./App.css";
import Routercomp from "./router/Routercomp";
import Appcover from "./components/covers/Appcover";

function App() {
  return (
    <div className="App">
      <Appcover>
        <Routercomp />
      </Appcover>
    </div>
  );
}

export default App;
