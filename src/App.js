import "./App.css";
import Routercomp from "./router/Routercomp";
import Appcover from "./components/covers/Appcover";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Appcover>
       <Home/>
      </Appcover>
    </div>
  );
}

export default App;
